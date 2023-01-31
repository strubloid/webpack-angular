const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: ['./src/main'],
    angular: ['./src/angular'],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: 'dist',
    historyApiFallback: true,
    overlay: true,
    stats: {
      colors: true
    },
  },
  devtool: 'source-map',
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
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [{
          loader: 'awesome-typescript-loader',
        }]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [{
          loader: 'sass-loader',
        }]
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: 'html-=loader',
            options: {
              attrs: ['img:src']
            }
          }
        ]
      },
    ]
  },
  alias: {
    'components': path.resolve(__dirname, 'src/components/'),
    'images': path.resolve(__dirname, 'src/images/'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.ContextReplacementPlugin(
    //   /angular(\\|\/)core/,
    //   path.join(__dirname, './src'),
    // ),
    new HTMLWebpackPlugin({
      template: './src/index.html'
    }),
    new MomentLocalesPlugin({
      localesToKeep: ['fr']
    })
  ]
}