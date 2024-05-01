module.exports = function(eleventyConfig) {
  
  // Set custom directories for input, output, includes, and data
  eleventyConfig.addPassthroughCopy("./_src/assets");
  eleventyConfig.addPassthroughCopy("./_src/css/main.css");
  eleventyConfig.addPassthroughCopy("./_src/script.js");

  // Get current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Specify the input, output, includes, and data directories
  return {
    dir: {
      input: "_src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    // Set Nunjucks as the HTML template engine
    HTMLTemplateEngine: 'njk',
  };
};