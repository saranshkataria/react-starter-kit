const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  let baseConfig = {};
  if (argv.mode === 'development') {
    baseConfig.devServer = {};
    baseConfig.devServer.hot = true;
    baseConfig.devServer.overlay = true;
    baseConfig.plugins = {};
    baseConfig.plugins.push(
      new HtmlWebpackPlugin({
        hash: true,
        title: 'React Starter Kit by Saransh Kataria'
      }),
      new webpack.HotModuleReplacementPlugin()
    );
  } else {
    baseConfig.module = {
      rules: [
        {
          test: /\.js/,
          exclude: /node_modules/,
          use: { loader: 'babel-loader' }
        }
      ]
    };
  }
  return baseConfig;
};
