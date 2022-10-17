/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n: {
    locales: ["cs", "en"],
    defaultLocale: "cs",
  },
};

module.exports = nextConfig;
