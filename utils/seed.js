const connection = require('../config/connection');
const SongLyric = require('../models/SongLyric');
const User = require('../models/User');
const songData = require('./songs');
const userData = require('./users')

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing song lyrics
  await SongLyric.deleteMany({});

  await User.deleteMany({});

  await SongLyric.collection.insertMany(songData);

  for (var i = 0; i < userData.length; i++) {
    await User.create(userData[i]);
  }

  // Log out the seed data to indicate what should appear in the database
  // console.table(songData);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
