const router = require('express').Router();
const { index, about, login, app } = require('../controllers/index');
const { loggedIn } = require('../controllers/user');

/* GET home page. */
router.get('/', index);
router.get('/about', about);
router.get('/login', login);
router.get('/app*', loggedIn, app);

module.exports = router;
