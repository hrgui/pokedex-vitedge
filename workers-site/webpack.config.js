const path = require("path");

const vitedgeWebpack = require(`vitedge/webpack.cjs`);

module.exports = {
  ...vitedgeWebpack({
    root: ".",
  }),
};
