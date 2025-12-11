// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "res.cloudinary.com",
//       },
//       {
//         protocol: "https",
//         hostname: "example.com",
//       },
//     ],
//   },
//   env: {
//     NEXT_PUBLIC_API_URL: "http://10.172.80.220:5000/api", // backend URL
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "example.com", // optional
      },
    ],
  },
  reactStrictMode: true,
  env: {
    // ⚠️ Local fallback only. DO NOT hardcode internal IPs here for production.
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

export default nextConfig;
