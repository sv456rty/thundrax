// https://bvgsoftware.com/blog/how-to-optimize-your-nextjs-production-build/

/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  experimental: { optimizeCss: true },
  images: {
    domains: [],
  },
};

module.exports = nextConfig;

module.exports = withBundleAnalyzer({
  ...nextConfig,
});
