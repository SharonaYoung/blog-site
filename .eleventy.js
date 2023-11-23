module.exports = function(eleventyConfig) {

  eleventyConfig.addPassThroughCopy('.src/style.css');
  eleventyConfig.addPassThroughCopy('.src/assets');

  return{
    dir: {
      input: "src",
      output: "public"
    }
  };
}