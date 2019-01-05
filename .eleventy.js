module.exports = function(eleventyConfig) {

  // Get only content that matches a tag
  eleventyConfig.addCollection("episodes", function(collection) {
    return collection.getFilteredByTag("episode");
  });

  // Nunjucks question link Shortcode
  eleventyConfig.addNunjucksShortcode("qlink", function(number) {
    return `<a href="https://github.com/netlify/ask-netlify/issues/${number}" class="question-link" target="_BLANK" rel="noopener">Question #${number}</a>`
  });

  // RSS plugin
  const pluginRss = require("@11ty/eleventy-plugin-rss");
  eleventyConfig.addPlugin(pluginRss);

  // minify the html output
  const htmlmin = require("html-minifier");
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if( outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });


  // other config settings
  return {
    dir: {
      input: "src/site",
      output: "dist"
    },
    templateFormats : ["njk", "md"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk"
  };

};
