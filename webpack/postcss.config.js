module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-simple-vars')({
      variables: function variables() {
        return require('./variables');
      },
      unknown: function unknown(node, name, result) {
        node.warn(result, `Unknown variable ${name}`);
      },
    }),
    require('postcss-nested'),
    require('postcss-automath'),
    require('postcss-modules'),
    require('postcss-preset-env')({
      browsers: 'last 2 versions',
    }),
    require('cssnano'),
  ],
};
