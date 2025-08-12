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
      // {
      //   source: "/hire",
      //   destination: "/", // Or /404 if you want a not-found page
      //   permanent: true,
      // }
    ];
  },
  async rewrites() {
    return [
      // Catch-all rewrite to index for SPA-style routing
      {
        source: "/:path*",
        destination: "/", // Or /404 if you want a not-found page
      },
    ];
  },
};

export default nextConfig;
