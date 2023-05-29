/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    baseURL: process.env.NEXT_BASE_URL,
    mongoDbUrl: process.env.MONGODB_URL,
  },
};

module.exports = nextConfig;
