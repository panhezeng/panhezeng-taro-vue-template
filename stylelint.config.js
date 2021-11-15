module.exports = {
  extends: ["stylelint-config-standard", "stylelint-prettier/recommended"],
  plugins: ["stylelint-order"],
  rules: {
    "selector-class-pattern": ["^([a-z][a-z0-9]*)([-_a-z0-9]+)*$"],
    "keyframes-name-pattern": ["^([a-z][a-z0-9]*)([-_a-z0-9]+)*$"],
    "declaration-block-no-redundant-longhand-properties": null,
    "block-no-empty": null,
    "no-descending-specificity": null,
    "value-no-vendor-prefix": null,
    "property-no-unknown": [
      true,
      {
        ignoreProperties: ["box-flex", "font-smoothing"], // 忽略某些未知属性的检测
      },
    ],
  },
  overrides: [
    {
      files: ["*.less", "**/*.less"],
      customSyntax: "postcss-less",
    },
    {
      files: ["*.html", "**/*.html", "*.vue", "**/*.vue"],
      customSyntax: "postcss-html",
    },
    {
      files: [
        "*.js",
        "**/*.js",
        "*.ts",
        "**/*.ts",
        "*.jsx",
        "**/*.jsx",
        "*.tsx",
        "**/*.tsx",
      ],
      customSyntax: "@stylelint/postcss-css-in-js",
    },
  ],
};
