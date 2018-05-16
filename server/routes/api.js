const router = require('express').Router();
const { loggedIn, getLoggedInUser, getUsersByUserame } = require('../controllers/api/user');

//User
router.get('/user/me', loggedIn, getLoggedInUser);
router.get('/user/:username', loggedIn, getUsersByUserame);

module.exports = router;