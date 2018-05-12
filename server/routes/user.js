const passport = require('passport');

const router = require('express').Router();
const { register, login, logout } = require('../controllers/user');

router.post('/register', register);
router.post('/login', passport.authenticate('local'), login);
router.get('/logout', logout);

module.exports = router;
