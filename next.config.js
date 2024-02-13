/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  fallbacks: {
    document: "/_offline",
  },
  reloadOnOnline: false,
  
});

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPWA({
  nextConfig,
});
