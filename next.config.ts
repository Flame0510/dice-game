import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  trailingSlash: false,
  distDir: '.next',
};

export default nextConfig;
