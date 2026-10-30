declare module "ssrf-req-filter" {
  import type { Agent } from "node:http";

  function ssrfFilter(url: string): Agent;

  export = ssrfFilter;
}
