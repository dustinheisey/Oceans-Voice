const common = require('@dh253/nds')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(common, {
    domain: 'fixme',
    manifest: {
      name: 'fixme',
      short_name: 'fixme',
      description:
        'fixme',
      theme_color: '#fixme',
      background_color: '#fixme',
    }
  })
}
