import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/r/:path.json.json",
        destination: "/r/:path.json",
      },
    ];
  },
};

export default nextConfig;
