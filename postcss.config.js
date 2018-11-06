const postcssImport = require('postcss-import')
const postcssNesting = require('postcss-nesting')
const postcssCustomMedia = require('postcss-custom-media');

module.exports = () => ({
  plugins: [
    postcssImport(),
    postcssNesting(),
    postcssCustomMedia(),
  ],
})