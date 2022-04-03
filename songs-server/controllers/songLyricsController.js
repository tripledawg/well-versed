const SongLyric = require('../models/SongLyric');

module.exports = {
    getQuestion(req, res) {
        SongLyric.count().then(async (count) => {
            let random = Math.floor(Math.random() * count);
            SongLyric.findOne({}).skip(random)
                .then(async (songLyric) =>
                    !songLyric
                        ? res.status(404).json({ message: 'Did not find song lyric' })
                        : res.json({
                            songLyric
                        })
                )
        }).catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    }
};
