const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: path.resolve(__dirname, 'frontend','src'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend', 'public')
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
        test: /\.(jpe?g|png|gif|svg|ico)(\?.+)?$/,
        include: [path.resolve(__dirname, 'frontend', 'public', 'images')],
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: './img/[name].[ext]'
          }
        }
      }
    ]
  },

  devServer: {
    host: '0.0.0.0',
    port: 8080
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/public/index.html'
    })
  ]
};
