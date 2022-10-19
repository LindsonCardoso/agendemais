/** @type {import('next').NextConfig} */
// change start-ul cache strategy, so that we can prompt user to reload when
// new version available, instead of showing new version directly
const runtimeCaching = require('next-pwa/cache')
runtimeCaching[0].handler = 'StaleWhileRevalidate'

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: false,
  runtimeCaching
})

module.exports = withPWA({
  // next.js config
})
