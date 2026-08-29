import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "/portfolio/" : "",
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
