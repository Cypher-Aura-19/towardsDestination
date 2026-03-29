import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow local public assets (including cache-busting query params like ?v=...)
    localPatterns: [{ pathname: "/**" }],
  },
};

export default nextConfig;
