const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  devtool: 'source-map',

  resolve: {
    modules: [ 'node_modules' ],
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {loader: 'ts-loader'}
        ]
      },
      {
        test: /\.(sc|sa|c)ss/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)(\?.+)?$/,
        include: [
          path.resolve(__dirname, 'public', 'images')
        ],
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

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
