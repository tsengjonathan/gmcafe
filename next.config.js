/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  async rewrites() {
    return [
      {
        source: '/js/script.js',
        destination: 'https://plausible.io/js/plausible.js'
      },
      {
        source: '/api/event', // Or '/api/event/' if you have `trailingSlash: true` in this config
        destination: 'https://plausible.io/api/event'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://gmcafe.io/traits',
        permanent: true
      }
    ]
  }
}
