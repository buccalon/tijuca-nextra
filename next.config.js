const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  unstable_staticImage: true,
  unstable_flexsearch: {
    codeblock: false
  }
})

module.exports = withNextra({
  reactStrictMode: true
})