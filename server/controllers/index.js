module.exports = {
  index(req, res) {
    if(req.isAuthenticated()) res.redirect('/app');
    else res.render("index", {title: "Index"});
  },
  about(req, res) {
    if(req.isAuthenticated()) res.redirect('/app');
    else res.render("about", {title: "About"});
  },
  login(req, res) {
    if(req.isAuthenticated()) res.redirect('/app');
    else res.render("login", {title: "Log in"});
  },
  app(req, res) {
    res.render("app", {title: "Blackboard"});
  }
}