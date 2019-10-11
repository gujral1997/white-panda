const path = require('path');

const CSSLoader = {
  test: /\.css$/,
  // exclude: /node_modules/,
  use: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
      options: { importLoaders: 1 },
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: `${__dirname}/postcss.config.js`,
        },
      },
    },
  ],
};

const LessLoader = {
  test: /\.less$/,
  use: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
    },
    {
      loader: 'less-loader',
      options: {
        paths: [path.resolve(__dirname, 'node_modules')],
        javascriptEnabled: true,
      },
    },
  ],
};

const htmlLoader = {
  test: /\.html$/,
  use: [
    {
      loader: 'html-loader',
    },
  ],
};

const JSLoader = {
  test: /\.(ts(x?)|js(x?))$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      babelrcRoots: ['.', '../'],
      presets: ['@babel/preset-react'],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-export-default-from',
        'syntax-dynamic-import',
      ],
    },
  },
};

const SVGLoader = {
  test: /\.svg/,
  use: {
    loader: 'svg-url-loader',
    options: {},
  },
};

const ESLintLoader = {
  test: /\.js$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: {
    loader: 'eslint-loader',
    options: {
      configFile: `${__dirname}/../.eslintrc`,
    },
  },
};

module.exports = {
  JSLoader,
  htmlLoader,
  CSSLoader,
  LessLoader,
  SVGLoader,
  ESLintLoader,
};
