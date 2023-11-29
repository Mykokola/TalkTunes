/** @type {import('next').NextConfig} */
const nextConfig = {  async rewrites() {
    return [
      {
        source: '/welcome',
        destination: '/api/welcomeMiddleware', // Шлях до вашого middleware
      },
    ];
  },}

module.exports = nextConfig
