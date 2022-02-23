/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    POKE_KEY: process.env.POKE_KEY,
  },
};

module.exports = nextConfig;
