import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
};

export default withNextIntl(nextConfig);
