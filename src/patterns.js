const patterns = {
  html: {
    script: /<script src="(.*?)"><\/script>/g
  },
  markdown: {
    heading: /^(#{1,}) (.*?)$/,
    image: /!\[(.*?)\]\((.*?)\)/g,
    link: /\[(.*?)\]\((.*?)\)/g
  }
};

module.exports = patterns;
