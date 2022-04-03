const express = require('express');
const db = require('./config/connection');
const path = require('path');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.set('json spaces', 2); //makes json pretty when output from API

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for social network api running on port ${PORT}!`);
  });
});

