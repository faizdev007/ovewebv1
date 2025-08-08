import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint during build
  },
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/", // Change to your desired landing page
        permanent: true,  // 308 redirect, cached by browsers & search engines
      },
      {
        source: "/hire",
        destination: "/", // Or /404 if you want a not-found page
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
