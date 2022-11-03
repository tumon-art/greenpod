/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // experimental: { appDir: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.buzzsprout.com",
        port: "",
        pathname: "/variants/**",
      },
    ],
  },
};

module.exports = nextConfig;
