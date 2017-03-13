import path from 'path'

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
        use: 'babel-loader'
      }
    ]
  }
}
