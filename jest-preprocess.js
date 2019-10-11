const babelOptions = {
  presets: ["babel-preset-gatsby"],
  plugins: ["babel-plugin-styled-components"]
}

module.exports = require("babel-jest").createTransformer(babelOptions)