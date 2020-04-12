const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  devtool: isDev ? 'source-map' : '',

  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: 'ts-loader' }]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico|jpg)(\?.+)?$/,
        include: [path.resolve(__dirname, 'public', 'images')],
        use: {
          loader: 'url-loader',
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
