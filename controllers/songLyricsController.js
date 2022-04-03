const SongLyric = require('../models/SongLyric');

//using aggregate method with promises, aggregate returns a collection of random samples of a size you can set
module.exports = {
    getQuestion(req, res) {
        SongLyric.aggregate([{$sample: {size:5}}]).then(async (aggregation) => {
            !aggregation ? res.status(404).json({ message: 'Unable to retrieve lyric'}) : res.json({aggregation})
        }).catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });

    }
};
