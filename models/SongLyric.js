const { Schema, model } = require('mongoose');

const songLyricSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        artist: {
            type: String,
            required: true,
            trim: true
        },
        lyric: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        year: {
            type: Number,
            required: true,
            trim: true
        },
        genre: {
            type: String,
            required: true,
            trim: true
        },
        clean: {
            type: Boolean,
            required: true,
        },


    }
)


const SongLyric = model('songLyric', songLyricSchema);

module.exports = SongLyric;