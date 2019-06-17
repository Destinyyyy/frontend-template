const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 3000,
    host: '0.0.0.0',
    contentBase: path.join(__dirname, 'src'),
    watchContentBase: true,
    // fallback to index.html if requested resource not found
    historyApiFallback: true,
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      // Necessary for file changes inside the bind mount to get picked up
      poll: 1000,
    },
    proxy: {
      '/api/**': {
        target: 'http://backend:8080/',
        secure: false,
        changeOrigin: true
      }
    }
  }
});