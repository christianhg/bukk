import path from 'path'
import webpack from 'webpack'

export default {
  entry: './src/bukk.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bukk.js',
    library: 'B',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              'babel-plugin-add-module-exports'
            ],
            presets: ['es2015']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
