// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = () => ({
  plugins: [
    require('autoprefixer')(),
    require('postcss-combine-duplicated-selectors')({ removeDuplicatedProperties: true }),
    require('postcss-discard-unused')(),
    require("css-mqpacker")(),
  ]
})
