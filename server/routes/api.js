const router = require('express').Router();
const { loggedIn, getLoggedInUser, getUsersByUserame } = require('../controllers/api/user');
const { getBlackboardById, getMyBlackboards, addBlackboard, updateBlackboard, deleteBlackboard } = require('../controllers/api/blackboard');

//User
router.get('/user/me', loggedIn, getLoggedInUser);
router.get('/user/:username', loggedIn, getUsersByUserame);

//Blackboards
router.get('/blackboard/me', loggedIn, getMyBlackboards);
router.get('/blackboard/:id', loggedIn, getBlackboardById);
router.post('/blackboard', loggedIn, addBlackboard);
router.put('/blackboard/:id', loggedIn, updateBlackboard);
router.delete('/blackboard/:id', loggedIn, deleteBlackboard);

module.exports = router;