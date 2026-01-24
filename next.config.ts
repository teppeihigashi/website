import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'higashigiken-pfp.s3.ap-northeast-1.amazonaws.com',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
