const templates = {
  liquid: {
    gist: url => `{% gist ${url} %}`
  },
  html: {
    heading: level => text => `<h${level}>${text}</h${level}>`,
    image: alt => src => `<img alt="${alt}" src="${src}" />`,
    link: href => text => `<a href="${href}">${text}</a>`,
    emphasis: text => `<em>${text}</em>`,
    strong: text => `<strong>${text}</strong>`
  }
};

module.exports = templates;
