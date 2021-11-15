// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = (ctx) => {
  return {
    plugins: [
      // to edit target browsers: use "browserslist" field in package.json
      require("autoprefixer")
    ],
  };
};
