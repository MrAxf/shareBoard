const router = require('express').Router();
const { index, about, login, app } = require('../controllers/index')

/* GET home page. */
router.get('/', index);
router.get('/about', about);
router.get('/login', login);
router.get('/app', app);

module.exports = router;
