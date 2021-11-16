module.exports = {
  env: {
    NODE_ENV: '"production"',
    API_BASE_URL:
      '"https://mockapi.eolinker.com/RkQjgHE8238b6de3ea45a447769834b9a6dfd5056332ce0"',
  },
  defineConstants: {},
  mini: {},
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  },
};
