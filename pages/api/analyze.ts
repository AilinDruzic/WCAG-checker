import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import * as axe from "axe-core";
import { JSDOM } from "jsdom";

// Validera om en sträng är en giltig URL
const isValidUrl = (url: string): boolean => {
  try {
    new URL(url); // Validerar URL-format
    return true;
  } catch {
    return false;
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    
    if (!isValidUrl(url)) {
      return res.status(400).json({ error: "Invalid URL format" });
    }

    try {
      console.log("Fetching HTML for URL:", url);

    
      const { data: html } = await axios.get(url, {
        timeout: 10000, 
        headers: { "User-Agent": "WCAG-Checker/1.0" }, 
      });

      console.log("HTML fetched successfully, length:", html.length);

      const dom = new JSDOM(html);


      global.window = dom.window as any;
      global.document = dom.window.document as any;


      const results = await axe.run(global.document.documentElement);


      global.window = undefined as any;
      global.document = undefined as any;

      console.log("Accessibility analysis completed:", results);

     
      res.status(200).json(results);
    } catch (error) {
      console.error("Error occurred during analysis:", error);


      if (axios.isAxiosError(error) && error.response) {
        return res.status(error.response.status).json({
          error: `Failed to fetch the URL (status: ${error.response.status})`,
        });
      } else if (axios.isAxiosError(error)) {
        return res.status(500).json({
          error: "Failed to fetch the URL",
          details: error.message,
        });
      }

      res.status(500).json({
        error: "An unexpected error occurred during analysis",
        details: (error as Error).message,
      });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
