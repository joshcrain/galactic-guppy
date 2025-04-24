const Image = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
  	eleventyConfig.addPassthroughCopy("images");
	eleventyConfig.addPassthroughCopy("fonts");
  	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addShortcode("image", async function(src, alt, sizes) {
		let metadata = await Image(src, {
			widths: [300, 600, 719],
			formats: ["avif", "webp", "jpeg"],
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

  // Special shortcode for hero image
  eleventyConfig.addShortcode("heroImage", async function(src, alt) {
    let metadata = await Image(src, {
      widths: [341], // Specific widths for the hero image
      formats: ["avif", "webp", "jpeg"],
      urlPath: "/img/",
      outputDir: "./_site/img/",
      useCache: false
    });

    let imageAttributes = {
      alt,
      sizes: "341px", // Fixed size for hero image
      loading: "lazy",
      decoding: "async",
      class: "hero-image"
    };

    return Image.generateHTML(metadata, imageAttributes);
  });
};
