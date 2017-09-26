const patterns = {
  html: {
    script: /<script.*?src="(.*?)".*?><\/script>/
  },
  markdown: {
    heading: /^(#{1,}) (.*?)$/,
    image: /!\[(.*?)\]\((.*?)\)/g,
    link: /(?!!)\[(.*?)\]\((.*?)\)/g
  }
};

module.exports = patterns;
