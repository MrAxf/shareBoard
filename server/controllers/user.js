const User = require('../models/user');

module.exports = {
  async register(req, res){
    res.setHeader('Content-Type', 'application/json');
    try {
      const { username, password } = req.body;
      const user = new User({username});
      await user.setPassword(password);
      await user.save();
      res.send(JSON.stringify({
        "error": 0,
        "message": "Register successfull"
      }));
    } catch (err) {
      res.send(JSON.stringify({
        "error": err.name,
        "message": err.message
      }));
    }
  },
  login(req, res){
    res.send(JSON.stringify({
      "error": 0,
      "message": "Login succesfull"
    }));
  },
  logout(req, res){
    req.logout();
    res.redirect("/");
  },
  loggedIn(req, res, next){
    if(req.isAuthenticated()) next();
    else res.redirect('/login');
  }
}