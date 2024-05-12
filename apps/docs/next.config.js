/** @type {import('next').NextConfig} */

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

module.exports = withNextra({
  transpilePackages: ['@unllamas/lacrypta-ui'],
  env: {
    PRIVATE_KEY:
      '5caa3cd87cf1ad069bcf90065f8e3c60e18a4fca7b6070a44ec7223877504c84',
    PUBLIC_KEY:
      'cee287bb0990a8ecbd1dee7ee7f938200908a5c8aa804b3bdeaed88effb55547',
  },
});
