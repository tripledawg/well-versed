const { callbackify } = require('util');  //use???
const { User, Friend } = require('../models');

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then(async (users) => {
        const userObj = {
          users
        };
        return res.json(userObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({
            user,
          })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a user and remove their thoughts and reactions and friends???
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user ? res.status(404).json({ message: 'No such user exists' }) : res.status(200).json({ message: 'User deleted!', user })
      ).catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
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
  // Add a friend to a user
  addFriend(req, res) {
    console.log('You are adding a friend');
    console.log(req.body);
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.body } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
            .status(404)
            .json({ message: 'No user found with that ID :(' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Remove friend from a user
  removeFriend(req, res) {

    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: {_id: req.params.friendId} } },
    )
      .then((user) =>
        !user
          ? res
            .status(404)
            .json({ message: 'No user found with that ID :(' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

};
