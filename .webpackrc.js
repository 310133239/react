import pxtorem from 'postcss-pxtorem';

export default {
  "entry": "src/index.js",
  "disableCSSModules": false,
  "extraBabelPlugins": [
    ["import",{ "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
  ],
  "ignoreMomentLocale": false,
  "browserslist": [
    "IOS >= 8",
    "Android >= 4"
  ],
  extraPostCSSPlugins: [
    pxtorem({
      rootValue: 100,
      propWhiteList: []
    })
  ],
}
