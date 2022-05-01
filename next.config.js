/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    POKE_KEY: process.env.POKE_KEY,
  },
  serverRuntimeConfig: {
    POKE_KEY: process.env.POKE_KEY,
  },
  images: {
    domains: ["images.pokemontcg.io", "avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
