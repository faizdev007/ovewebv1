import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint during build
  },
  images: {
    domains: ['staging.optimalvirtualemployee.com.au'],
  },
};

export default nextConfig;
