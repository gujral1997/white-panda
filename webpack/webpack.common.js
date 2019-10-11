const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
  entry: ['./src/index.tsx'],
  module: {
    rules: [
      loaders.JSLoader,
      loaders.htmlLoader,
      loaders.CSSLoader,
      loaders.LessLoader,
      loaders.SVGLoader,
      loaders.ESLintLoader,
    ],
  },
  plugins: [
    plugins.StyleLintPlugin,
    plugins.MiniCssExtractPlugin,
    plugins.HtmlWebPackPlugin,
    plugins.CleanWebpackPlugin,
  ],
};
