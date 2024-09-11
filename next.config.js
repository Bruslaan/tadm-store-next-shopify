/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['pagedone.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      }
    ]
  }
};
