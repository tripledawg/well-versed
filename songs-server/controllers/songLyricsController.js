const SongLyric = require('../models/SongLyric');

module.exports = {
    getQuestion(req, res) {
        // SongLyric  get five random song lyric entries https://stackoverflow.com/questions/39277670/how-to-find-random-record-in-mongoose 
        let question;
        // SongLyric.count().exec(function (err, count) {
        //     let randomNum = Math.floor(Math.random() * count);
        //     SongLyric.findOne().skip(randomNum).exec(
        //         function (err, result) {
        //             question = result;
        //      }
        //     )
        // });
        SongLyric.findOne(function(err, songLyric){
            question = songLyric;
        }).catch((err) => res.status(500).json(err));

        res.json({message: "reached getQuestion", question});
        
    }
};