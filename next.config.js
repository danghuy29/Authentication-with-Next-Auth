/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    cognitoClientID: process.env.COGNITO_CLIENT_ID,
    cognitoClientSecret: process.env.COGNITO_CLIENT_SECRET,
    cognitoDomain: process.env.COGNITO_DOMAIN,
    cognitoIssuer: process.env.COGNITO_ISSUER,
  },
};

module.exports = nextConfig;
