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

  // output: "standalone",

  // https://github.com/vercel/next.js/issues/51508

  /*
  // redacted
  webpack: (config, { isServer, dev }) => {
    config.module.rules.push({
      test: /next\/dist\/compiled\/react-dom/,
      loader: "null-loader",
    });

    return config;
  },
  */

  modularizeImports: {
    "next/dist/compiled/react-dom(/?[A-Z,a-z]*)": {
      transform: "react-dom{{ matches.[1] }}",
      skipDefaultConversion: true,
    },
  },
};

module.exports = nextConfig;

module.exports = withBundleAnalyzer({
  ...nextConfig,
});
