/** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
// };

// module.exports = {
//   experimental: {
//     appDir: true,
//   },
// };
const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "./",
};

export default nextConfig;
