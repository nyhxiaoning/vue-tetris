var path = require("path");

module.exports = {
  build: {
    env: require("./prod.env"),
    index: path.resolve(__dirname, "../public/index.html"),
    assetsRoot: path.resolve(__dirname, "../public"),
    assetsSubDirectory: "static",
    assetsPublicPath: "./",
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ["js", "css"],
    bundleAnalyzerReport: process.env.npm_config_report,
  },
  dev: {
    env: require("./dev.env"),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    proxyTable: {},
    cssSourceMap: false,
  },
};
