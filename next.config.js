/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: "",
                pathname:  "/dppta0r5e/**"
            }
        ]
    }
}

module.exports = nextConfig
