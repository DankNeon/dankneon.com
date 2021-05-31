const marked = require("marked");
module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addFilter("markdown", value => {
    return marked(value);
  });
  return {
    ...eleventyConfig,
    htmlTemplateEngine: "liquid"
  };
};
