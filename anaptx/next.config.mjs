/** @type {import('next').NextConfig} */
const nextConfig = {
    // assetPrefix: '/',
    // basePath: '/anaptx',
    reactStrictMode: true,
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    images: {
        unoptimized: true
    },
    output: 'export'
};

export default nextConfig;
