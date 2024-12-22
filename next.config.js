/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  webpack: (config) => {
    config.externals = config.externals || [];
    config.externals.push("@sanity/vision");
    return config;
  },
};

module.exports = nextConfig;
