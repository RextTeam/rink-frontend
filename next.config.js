/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'en',
  }
}