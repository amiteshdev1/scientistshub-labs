/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [],
  },
  // Env variables are automatically loaded by Next.js if they start with NEXT_PUBLIC_
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        // In development: forwards to local backend at localhost:5000
        // In production: Next.js serves from .env.production (absolute URLs used directly)
        destination: 'http://localhost:5000/api/:path*',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
