const Image = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
  	eleventyConfig.addPassthroughCopy("images");
	eleventyConfig.addPassthroughCopy("fonts");
  	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addShortcode("image", async function(src, alt, sizes) {
		let metadata = await Image(src, {
			widths: [300, 600],
			formats: ["avif", "jpeg"],
      urlPath: "/img/",
      outputDir: "./_site/img/",
      useCache: false
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
