const router = require('express').Router();
const { loggedIn, getLoggedInUser, getUsersByUserame } = require('../controllers/api/user');
const { getBlackboardById, getMyBlackboards, addBlackboard } = require('../controllers/api/blackboard');

//User
router.get('/user/me', loggedIn, getLoggedInUser);
router.get('/user/:username', loggedIn, getUsersByUserame);

//Blackboards
router.get('/blackboard/me', loggedIn, getMyBlackboards);
router.get('/blackboard/:id', loggedIn, getBlackboardById);
router.post('/blackboard', loggedIn, addBlackboard);

module.exports = router;