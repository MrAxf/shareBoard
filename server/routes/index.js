const router = require('express').Router();
const { index, app } = require('../controllers/index')

/* GET home page. */
router.get('/', index);
router.get('/app', app);

module.exports = router;
