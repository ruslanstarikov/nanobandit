module.exports = function(eleventyConfig) {

  eleventyConfig.addCollection("labNotes", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/lab-notes/*.md").filter(item => {
      return item.inputPath !== "./src/lab-notes/index.md";
    });
  });

  eleventyConfig.addFilter("date", function(dateObj, format) {
    const d = new Date(dateObj);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  });

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
