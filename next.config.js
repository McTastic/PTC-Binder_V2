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
    domains: ["images.pokemontcg.io"],
  },
};

module.exports = nextConfig;
