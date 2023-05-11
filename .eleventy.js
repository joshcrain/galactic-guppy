
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("posts/*/*.jpg");
  eleventyConfig.addPassthroughCopy("testcss/*.css");
};
