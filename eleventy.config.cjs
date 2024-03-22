const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(pluginWebc, {
    components: "./src/_includes/components/**/*.webc"
  });

  eleventyConfig.addPassthroughCopy({
    "./public/": "assets",
    "./node_modules/@fortawesome/fontawesome-free/css/solid.min.css": "css/solid.min.css",
    "./node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css": "css/fontawesome.min.css",
    "./node_modules/@fortawesome/fontawesome-free/css/brands.min.css": "css/brands.min.css",
    "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf": "webfonts/fa-solid-900.ttf",
    "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2": "webfonts/fa-solid-900.woff2",
    "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf": "webfonts/fa-brands-400.ttf",
    "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2": "webfonts/fa-brands-400.woff2",
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
