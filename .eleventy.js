const common = require("@dh253/nds");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(common, {
    domain: "https://oceansvoice.dustinheisey.com",
    manifest: {
      name: "Ocean's Voice - Ocean Conservation Nonprofit",
      short_name: "Ocean's Voice",
      description:
        "Ocean's Voice is a nonprofit organization dedicated to protecting and restoring the world's oceans. We conduct research, advocate for policy change, educate the public, and lead conservation initiatives. Join us in creating a future where our oceans thrive.",
      theme_color: "#01658D",
      background_color: "#F8FDFF",
    },
  });
};
