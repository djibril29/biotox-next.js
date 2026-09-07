import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Hostinger Node.js Web Apps démarre `.next/standalone/server.js`.
  // Sans cette option, Next ne génère pas ce dossier et l'app ne démarre pas.
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;




