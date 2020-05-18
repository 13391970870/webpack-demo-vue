module.exports = {
  presets: [
    '@vue/app',
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-dynamic-import",
    ["@babel/plugin-transform-modules-commonjs", { "strictMode": false }]
  ],
  comments: false,
  env: {
    test: {
      presets: ["@babel/preset-env"],
      plugins: ["istanbul"]
    }
  }
}