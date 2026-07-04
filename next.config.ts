import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  experimental: {
    esmExternals: "loose",
  },
  webpack: (config) => {
    // pdfjs-dist tries to resolve `canvas` for Node.js use, which breaks in the browser bundle
    config.resolve.alias.canvas = false;
    return config;
  },
};

export default nextConfig;
