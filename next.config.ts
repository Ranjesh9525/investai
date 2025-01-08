// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Completely disables ESLint during production builds
  },
};

module.exports = nextConfig;
