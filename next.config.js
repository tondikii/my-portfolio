/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: "asset/source",
    });
    return config;
  },
  env: {
    emailJsPublicKey: "O23_E2j96krwgnVJP",
    emailJsServiceId: "service_portfolio",
    emailJsTemplateId: "template_portfolio",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
