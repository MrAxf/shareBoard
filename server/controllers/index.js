module.exports = {
  index(req, res) {
    res.render("index", {title: "Index"});
  },
  app(req, res) {
    res.render("app", {title: "app"});
  }
}