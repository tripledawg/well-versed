const router = require('express').Router();
const {getQuestion} = require('../../controllers/songLyricsController');

router.route('/')
.get(getQuestion); //pulls data object   


module.exports = router;