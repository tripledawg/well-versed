const connection = require('../config/connection');
const SongLyric = require('../models/SongLyric');
const songData = require('./songsCopy')

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing song lyrics
  await SongLyric.deleteMany({});

  // Add students to the collection and await the results
  await SongLyric.collection.insertMany(songData);

  // Log out the seed data to indicate what should appear in the database
  console.table(songData);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
