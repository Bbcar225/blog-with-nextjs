/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/lab-ly/nextjs/blog",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ui-avatars.com"],
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
