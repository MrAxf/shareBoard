module.exports = {
  loggedIn(req, res, next){
    if(req.isAuthenticated()) next();
    else res.status(401).send('Operation not permited.');
  },
  getLoggedInUser(req, res){
    res.json(req.user);
  }
}