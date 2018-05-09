const User = require('../models/user');

module.exports = {
  async register(req, res){
    res.setHeader('Content-Type', 'application/json');
    console.log(req.body);
    try {
      const { username, password } = req.body;
      const user = new User({username});
      await user.setPassword(password);
      await user.save();
      res.send(JSON.stringify({
        "error": 0,
        "message": "Register succesfull"
      }));
    } catch (err) {
      res.send(JSON.stringify({
        "error": err.name,
        "message": err.message
      }));
    }
  },
  async login(req, res){
    res.setHeader('Content-Type', 'application/json');
    try {
      const { username, password } = req.body;
      const { user } = await User.authenticate()(username, password);
      res.send(JSON.stringify({
        "error": 0,
        "message": "Login succesfull"
      }));
    } catch (err) {
      console.log(err);
    }
  },
  logout(req, res){
    req.logout();
    res.redirect("/");
  },
  loggedIn(req, res, next){
    if(req.user) next();
    else res.redirect('/login');
  }
}