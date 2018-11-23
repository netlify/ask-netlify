module.exports = function(eleventyConfig) {

  // static passthroughs
  eleventyConfig.addPassthroughCopy("www/site/fonts");
  eleventyConfig.addPassthroughCopy("www/site/images");

  // minify the html output
  const htmlmin = require("html-minifier");
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if( outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: false, // we need comments to identify the expcerpt split marker.
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });


  // other config settings
  return {
    dir: {
      input: "www/site",
      output: "dist"
    },
    templateFormats : ["njk", "md"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk",
    passthroughFileCopy: true
  };

};
