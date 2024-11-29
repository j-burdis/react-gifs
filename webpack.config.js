const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'templates/index.html'
      // !!html-loader!
    })
  ],
  devtool: 'source-map',
  // sourcemap
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
        // loader:
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
        // loaders:
      },
      {
        test: /\.html$/,
        use: 'html-loader'
        // loader:
      },
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  }
};
