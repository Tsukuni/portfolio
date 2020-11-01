const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/')
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
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]',
        },
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin({ configFile: 'tsconfig.json' })],
  },
  serve: {
    host: 'localhost',
    port: 8080,
    historyApiFallback: true
  }
};
