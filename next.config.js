const withImages = require('next-images')
const remarkMath = require('remark-math')
const rehypeKatex = require('rehype-katex')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
})
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  devIndicators: {
    autoPrerender: false,
  },

  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? '/2020/circuits/curve-detectors' : '',
  ...withImages(
    withMDX({
      pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    })
  ),
}
