import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/analyze": ["./node_modules/axe-core/axe.min.js"],
  },
};

export default nextConfig;
