/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.pexels.com" }],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
