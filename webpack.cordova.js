var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'client', 'index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist', 'cordova'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      css: path.resolve(__dirname, 'client', 'assets', 'css')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'client', 'templates', 'index.cordova.ejs'),
      filename: 'index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: process.env.NODE_ENV === 'production'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: /client/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react']
          }
        }
      },
      {
        test: /\.css$/,
        include: /client\/assets\/css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: true,
              modules: true
            }
          }
        ]
      }
    ]
  }
}
