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
    host: '0.0.0.0',
    port: 8080,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    publicPath: '/',
    historyApiFallback: true,
    inline: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
  },
});
