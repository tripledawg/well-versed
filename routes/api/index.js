const router = require('express').Router();
const songLyricsRoutes = require('./songLyricsRoutes');

router.use('/songLyrics', songLyricsRoutes);

module.exports = router;