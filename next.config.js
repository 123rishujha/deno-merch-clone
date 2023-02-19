/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['merch-clone.s3.ap-south-1.amazonaws.com']
  },
  unoptimized: true,
}

module.exports = nextConfig
