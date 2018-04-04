const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'React Starter Kit by Saransh Kataria'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
