import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  /* config options here */
  images: {
    // https://images.hdqwalls.com/wallpapers/clouds-8k-fs.jpg
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.hdqwalls.com',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
