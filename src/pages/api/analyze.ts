import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { JSDOM, VirtualConsole } from "jsdom";
import { isIP } from "node:net";
import { readFile } from "node:fs/promises";
import path from "node:path";
import ssrfFilter from "ssrf-req-filter";

const MAX_HTML_BYTES = 2 * 1024 * 1024;

const isAllowedUrl = (value: string): boolean => {
  try {
    const url = new URL(value);

    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return false;
    }

    if (url.username || url.password) {
      return false;
    }

    const hostname = url.hostname.replace(/^\[|\]$/g, "").toLowerCase();

    if (
      hostname === "localhost" ||
      hostname.endsWith(".localhost") ||
      hostname.endsWith(".local") ||
      hostname.endsWith(".internal") ||
      isIP(hostname) !== 0
    ) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
};

type AxeWindow = Window & {
  axe?: {
    run: (context?: Document | Element) => Promise<unknown>;
  };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");

    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  const url = req.body?.url;

  if (typeof url !== "string" || !url.trim()) {
    return res.status(400).json({
      error: "Please enter a URL",
    });
  }

  if (!isAllowedUrl(url)) {
    return res.status(400).json({
      error: "Please enter a valid public HTTP or HTTPS URL",
    });
  }

  let dom: JSDOM | undefined;

  try {
    const response = await axios.get<string>(url, {
      timeout: 10000,
      responseType: "text",
      maxRedirects: 0,
      maxContentLength: MAX_HTML_BYTES,
      maxBodyLength: MAX_HTML_BYTES,
      decompress: false,
      proxy: false,
      httpAgent: ssrfFilter(url),
      httpsAgent: ssrfFilter(url),
      headers: {
        "User-Agent": "Accessibly/1.0",
        Accept: "text/html",
        "Accept-Encoding": "identity",
      },
      validateStatus: (status) => status >= 200 && status < 400,
    });

    if (response.status >= 300) {
      return res.status(422).json({
        error: "This website redirects to another address. Redirects are not supported yet.",
      });
    }

    const contentType = String(response.headers["content-type"] ?? "").toLowerCase();

    if (!contentType.includes("text/html") && !contentType.includes("application/xhtml+xml")) {
      return res.status(422).json({
        error: "This URL does not return an HTML page.",
      });
    }

    const html = response.data;

    if (typeof html !== "string") {
      return res.status(422).json({
        error: "Could not read the website's HTML.",
      });
    }

    const axePath = path.join(process.cwd(), "node_modules", "axe-core", "axe.min.js");

    const axeSource = await readFile(axePath, "utf8");

    const virtualConsole = new VirtualConsole();

    dom = new JSDOM(html, {
      url,
      runScripts: "outside-only",
      virtualConsole,
    });

    const axeWindow = dom.window as unknown as AxeWindow;

    dom.window.eval(axeSource);

    if (!axeWindow.axe) {
      throw new Error("axe-core failed to initialize");
    }

    const results = await axeWindow.axe.run(dom.window.document.documentElement);

    return res.status(200).json(results);
  } catch (error) {
    console.error("Accessibility analysis failed:", error);

    return res.status(502).json({
      error: "We couldn't analyze this website. Please try again.",
    });
  } finally {
    dom?.window.close();
  }
}
