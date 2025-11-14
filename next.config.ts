import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const proxyTargetUrl = process.env.PROXY_TARGET_URL; // 从环境变量读取目标URL

    if (!proxyTargetUrl)
      throw new Error("PROXY_TARGET_URL environment variable is not defined");

    return [
      {
        source: "/:path*",
        destination: `${proxyTargetUrl}/:path*`,
      },
    ];
  },
};

export default nextConfig;
