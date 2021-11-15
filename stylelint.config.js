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
    "selector-type-no-unknown": null,
    "property-no-unknown": null,
  },
  ignoreFiles: ["*.md", "**/*.md"],
  overrides: [
    {
      files: ["*.less", "**/*.less"],
      customSyntax: "postcss-less",
    },
    {
      files: ["*.html", "**/*.html", "*.vue", "**/*.vue"],
      customSyntax: "postcss-html",
    },
    // {
    //   files: ["*.md", "**/*.md"],
    //   customSyntax: "postcss-markdown",
    // },
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
