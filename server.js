const express = require('express');
const db = require('./config/connection');
const path = require('path');
const routes = require('./routes');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const dotenv = require('dotenv').config()  ///imports environment variable




const store = new MongoDBStore({
  uri: process.env.MONGODB_URI,
  collection: 'mySessions'
});

// Catch errors
store.on('error', function(error) {
  console.log(error);
});


const sess = {
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  },
  store: store,
  secret: process.env.SESSION_SECRET,  //session secret is in .env
  resave: false,
  saveUninitialized: false
};



const PORT = process.env.PORT || 3001;
const app = express();
app.use(session(sess));

app.set('json spaces', 2); //makes json pretty when output from API

app.use(express.static(path.resolve(__dirname, './game-client/build')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for well-versed api running on port ${PORT}!`);
  });
});

