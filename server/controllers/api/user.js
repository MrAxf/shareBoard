const User = require('../../models/user')

module.exports = {
  loggedIn(req, res, next){
    if(req.isAuthenticated()) next();
    else res.status(401).send('Operation not permited.');
  },
  getLoggedInUser(req, res){
    res.json(req.user);
  },
  async getUsersByUserame(req, res){
    const users = await User.find({"username": { "$regex": `${req.params.username}`, "$options": "i" } })
    res.json(users);
  }
}