const router = require('express').Router();
const {createUser, readUser, updateUser, deleteUser, logout, loggedIn} = require('../../controllers/userController');

router.route('/')
.post(createUser); // posts new user 

router.route('/login').post(readUser).put(updateUser).delete(deleteUser);

router.route('/logout').get(logout);

// Login route
router.route('/loggedIn').get(loggedIn);


module.exports = router;   