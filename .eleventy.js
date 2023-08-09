const Image = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("posts/*/*.jpg");
  eleventyConfig.addPassthroughCopy("testcss/*.css");
  eleventyConfig.addPassthroughCopy("hero2.png");


  eleventyConfig.addShortcode("image", async function(src, alt, sizes) {
		let metadata = await Image(src, {
			widths: [300, 600],
			formats: ["avif", "jpeg"],
      urlPath: "/img/",
      outputDir: "./_site/img/"
		});

		let imageAttributes = {
			alt,
			sizes,
			loading: "lazy",
			decoding: "async",
		};

		// You bet we throw an error on a missing alt (alt="" works okay)
		return Image.generateHTML(metadata, imageAttributes);
	});
};
