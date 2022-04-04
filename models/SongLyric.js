const { Schema, model } = require('mongoose');

const songLyricSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            new: true
        },
        artist: {
            type: String,
            required: true,
            trim: true,
            new: true
        },
        lyric: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            new: true
        },
        year: {
            type: Number,
            required: true,
            trim: true,
            new: true
        },
        genre: {
            type: String,
            required: true,
            trim: true,
            new: true
        },
        clean: {
            type: Boolean,
            required: true,
            new: true
        },


    }
)


const SongLyric = model('songLyric', songLyricSchema);

module.exports = SongLyric;