/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
  basePath: isProd ? "" : "",
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

// export default nextConfig;
module.exports = nextConfig;
