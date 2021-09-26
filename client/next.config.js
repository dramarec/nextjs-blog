require('dotenv').config()

module.exports = {
    env: {
        API_URL: process.env.API_URL
    },
    reactStrictMode: true,
    images: {
        domains: [
            'www.superherodb.com',
            'source.unsplash.com'
        ],
    },
}