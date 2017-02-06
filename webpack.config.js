const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/bukk.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bukk.js',
    library: 'B',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['babel-plugin-add-module-exports']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
