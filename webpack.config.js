const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const host = process.env.HOST || 'localhost'
module.exports = {
  entry: {
    main: './src/main.ts',
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      'components': path.resolve(__dirname, 'src/components/'),
      'images': path.resolve(__dirname, 'src/images/'),
    },
  },
  devtool: 'source-map',
  output: {
    filename: '[name]-web.js',
    path: __dirname + '/dist',
    publicPath: '/'
  },
  devServer: {
    port: 8080,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'sass-loader'
        ]
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src']
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MomentLocalesPlugin({
      localesToKeep: ['fr']
    })
  ]
}