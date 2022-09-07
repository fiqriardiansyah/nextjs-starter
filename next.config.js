/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL_DEV: 'BASE_URL_DEV',
    BASE_URL_PROD: 'BASE_URL_PROD',
  },
  images: {
    domains: [],
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    // localeDetection: false,
  },
};

module.exports = nextConfig;
