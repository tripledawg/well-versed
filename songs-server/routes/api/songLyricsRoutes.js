const router = require('express').Router();
const {getQuestion} = require('../../controllers/songLyricsController');

router.route('/').get(getQuestion);


module.exports = router;