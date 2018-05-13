const router = require('express').Router();
const { loggedIn, getLoggedInUser } = require('../controllers/api/user');

//User
router.get('/user/me', loggedIn, getLoggedInUser);

module.exports = router;