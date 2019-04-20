const path = require('path');
const webpack = require('webpack');

module.exports = env => ({
  mode: env.NODE_ENV,
  entry: path.resolve(__dirname, './client/index.jsx'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /(.jsx|.js)?/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /(.css | .scss)$/,
        use: ['style-loader', 'css-loader', 'style-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    publicPath: '/dist/',
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
});
