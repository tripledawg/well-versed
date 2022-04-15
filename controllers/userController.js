const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {

  // create a new user
  async createUser(req, res) {
    try {
      const newUser = req.body;
      // hash the password from 'req.body' and save to newUser
      newUser.password = await bcrypt.hash(req.body.password, 10);
      // create the newUser with the hashed password and save to DB
      const userData = await User.create(newUser);
      req.session.save(() => {
        req.session.loggedIn = true;
        res.status(200).json(userData);
      });
    }
    catch (err) {
      console.log(err);
      res.status(500).json(err).send;  //async and send 
    }
  },

  // Login existing user
  async readUser(req, res) {
    try {
      console.log(req.body.email)
      // look in database to find the user matching this username
      const userData = await User.findOne({
        where: {
          email: req.body.email
        }
      });
      console.log(userData)
      if (!userData) {
        res.status(400).json({ message: 'Incorrect username or password' });
        return;
      }

      const correctPassword = await userData.validatePassword(req.body.password);
      if (!correctPassword) {
        res.status(400).json({ message: 'Incorrect username or password' });
        return;
      }

      //if both username and password are correct, start session
      req.session.save(() => {
        req.session.loggedIn = true;
        res.status(200).json(userData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err).send;
    }
  },

  //Update User
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body })
      .then((user) =>
        !user ? res.status(404).json({ message: 'No such user exists' }) : res.status(200).json({ message: 'User updated!', user })
      ).catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Delete user
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user ? res.status(404).json({ message: 'No such user exists' }) : res.status(200).json({ message: 'User deleted!', user })
      ).catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Log out
  async logout(req, res) {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  },

  async loggedIn(req, res) {
    if (req.session.loggedIn) {
      res.status(200).json({ 'loggedIn': 'true' });
    }
    else {
      res.status(503).json({ 'message': 'User is not logged in.' });
    }
  }
};
