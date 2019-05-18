const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
const withTypescript = require('@zeit/next-typescript')
const exportPathMap = defaultPathMap => {
  return {
    '/': { page: '/' }
  }
}

module.exports = withPlugins(
  [
    withSass,
    withImages,
    withTypescript
  ],
  exportPathMap
)
