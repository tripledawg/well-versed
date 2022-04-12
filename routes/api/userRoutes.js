const router = require('express').Router();
const {createUser, readUser, updateUser, deleteUser, logout} = require('../../controllers/userController');

router.route('/')
.post(createUser); // posts new user 

router.route('/:user').get(readUser).put(updateUser).delete(deleteUser);

router.route('/logout').get(logout);

module.exports = router; 