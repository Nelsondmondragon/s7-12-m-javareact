/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'media.graphassets.com',
      'www.revistaautocrash.com',
      'res.cloudinary.com',
    ],
  },
};

module.exports = nextConfig;
