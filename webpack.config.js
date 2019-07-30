const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    writeToDisk: true,
    hot: true
  },
  context: path.resolve(__dirname, 'src'),
  entry: {
    colorsAndType: './pages/colors-and-type.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          'pug-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './pages/colors-and-type.pug',
      filename: 'colors-and-type.html',
      chunks: []
    })
  ]
}