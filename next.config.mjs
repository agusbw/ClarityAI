/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // because we're using static export
  images: { unoptimized: true },
};

export default nextConfig;
