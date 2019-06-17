const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    chunkFilename: '[name].[hash].bundle.js',
    filename: '[name].[hash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: !IS_PRODUCTION,
              plugins: () => [
                autoprefixer(),
              ],
            },
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      path: `${__dirname}/dist`,
      template: `${__dirname}/src/index.html`
    })
  ],
  resolve: {
    extensions: ['*', '.js'],
    alias: {
      // `styles` alias used to import shared styles (in src/styles folder) easier in scss files
      styles: path.resolve(__dirname, 'src/styles')
    }
  }
};