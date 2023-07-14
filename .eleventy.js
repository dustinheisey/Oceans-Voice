const common = require("@dh253/nds");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(common, {
    domain: "https://oceansvoice.dustinheisey.com",
  });
};
