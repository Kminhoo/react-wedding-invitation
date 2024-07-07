const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@sections': path.resolve(__dirname, './src/components/sections'),
      '@firebaseApp': path.resolve(__dirname, './src/firebaseApp'),
      '@mapleAssets': path.resolve(__dirname, './src/mapleAssets'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
}
