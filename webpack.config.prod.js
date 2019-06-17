const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.config.common');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      path: `${__dirname}/dist`,
      template: `${__dirname}/src/index.html`
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    }),
    new CleanWebpackPlugin()
  ]
});