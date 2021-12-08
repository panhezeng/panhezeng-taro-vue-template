const path = require("path");
const CircularDependencyPlugin = require("circular-dependency-plugin");

function setCircularDependencyPlugin(chain) {
  chain.plugin("circular-dependency").use(CircularDependencyPlugin, [
    {
      // exclude detection of files based on a RegExp
      exclude: /node_modules/,
      // include specific files based on a RegExp
      include: /src*/,
      // add errors to webpack instead of warnings
      failOnError: true,
      // allow import cycles that include an asyncronous import,
      // e.g. via import(/* webpackMode: "weak" */ './file.js')
      allowAsyncCycles: false,
      // set the current working directory for displaying module paths
      cwd: process.cwd(),
      // `onStart` is called before the cycle detection starts
      // onStart({ compilation }) {
      //   // console.log('start detecting webpack modules cycles');
      // },
      // `onDetected` is called for each module that is cyclical
      onDetected({ /* module,*/ paths, compilation }) {
        // `paths` will be an Array of the relative module paths that make up the cycle
        // `module` will be the module record generated by webpack that caused the cycle
        compilation.errors.push(new Error(paths.join(" -> ")));
      },
      // `onEnd` is called before the cycle detection ends
      // onEnd({ compilation }) {
      //   // console.log('end detecting webpack modules cycles');
      // },
    },
  ]);
}

const config = {
  projectName: "taro-vue-template",
  date: "2021-11-10",
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: "src",
  outputRoot: "dist",
  plugins: [],
  defineConstants: {},
  alias: {
    "@": path.resolve(__dirname, "..", "src"),
  },
  copy: {
    patterns: [],
    options: {},
  },
  framework: "vue3",
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
    webpackChain(chain) {
      setCircularDependencyPlugin(chain);

      chain.module
        .rule("vue")
        .use("vueLoader")
        .tap((options) => {
          options.compilerOptions.isCustomElement = (tag) =>
            tag.startsWith("wm-");
          return options;
        });
    },
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
    webpackChain(chain) {
      setCircularDependencyPlugin(chain);
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
