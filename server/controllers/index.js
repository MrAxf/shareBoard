module.exports = {
  index(req, res) {
    res.render("index", {title: "Index"});
  },
  about(req, res) {
    res.render("about", {title: "About"});
  },
  login(req, res) {
    res.render("login", {title: "Log in"});
  },
  app(req, res) {
    res.render("app", {title: "app"});
  }
}