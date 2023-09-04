// https://bvgsoftware.com/blog/how-to-optimize-your-nextjs-production-build/

/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./src/i18n.ts"
);

const nextConfig = {
  experimental: { optimizeCss: true },
  images: {
    domains: [],
  },
};

module.exports = nextConfig;

module.exports = withBundleAnalyzer(
  withNextIntl({
    ...nextConfig,
  })
);
