const router = require('express').Router();
const songLyricsRoutes = require('./songLyricsRoutes');
const userRoutes = require('./userRoutes')

router.use('/songLyrics', songLyricsRoutes);
router.use('/users', userRoutes)

module.exports = router;