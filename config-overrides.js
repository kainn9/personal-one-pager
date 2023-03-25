// CRA doesn't support aliases so we use react-rewired package
// https://github.com/facebook/create-react-app/issues/12047

// we must use require synatx for react-rewired package.
const path = require("path")

module.exports = function override (config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@util": path.resolve(__dirname, "src/util/"),
      "@localAssets": path.resolve(__dirname, "src/localAssets/")
    }
  }
  return config
}
