module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/reset.css');
  eleventyConfig.addPassthroughCopy('src/style.css');
  eleventyConfig.addPassthroughCopy('src/assets');

  return{
    dir: {
      input: "src",
      output: "public"
    }
  };
}