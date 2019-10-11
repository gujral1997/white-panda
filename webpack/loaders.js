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
      presets: ['@babel/env', '@babel/typescript', '@babel/preset-react'],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-syntax-dynamic-import',
        'syntax-dynamic-import',
        [
          'import',
          {
            libraryName: 'antd',
            style: true,
          },
        ],
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

const AssetLoader = {
  test: /\.(eot|woff|ttf|svg|png|jpg|wav|mp3)$/,
  use: {
    loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]',
  },
};

module.exports = {
  JSLoader,
  htmlLoader,
  CSSLoader,
  LessLoader,
  SVGLoader,
  ESLintLoader,
  AssetLoader
};
