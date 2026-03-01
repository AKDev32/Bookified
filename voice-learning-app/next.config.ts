import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'covers.openlibrary.org' }
    ],
    // Disable optimization for external images to prevent 400 errors
    unoptimized: process.env.NODE_ENV === 'development',
  }
};

export default nextConfig;
