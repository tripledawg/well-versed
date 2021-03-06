const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 5; 

// Schema to create user model
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      new: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
      //validation of email address using Mongoose's matching validation
    },
    password: {
      type: String,
      required: true,
      new: true,
      minLength: [8, "This password only has {VALUE} characters.  Please choose a password with at least 8 characters."],
      unique: false
    }, 
    year: {
      type: Number,
      required: true, 
      new: true,
      minLength: [4, "Please enter the year using four digits, YYYY"],
      maxLength: [4, "Invalid year.  Please enter a four digit year, YYYY."],
      unique: false
    }
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
      new: true,
    },
  }
);

userSchema.methods.validatePassword = async function validatePassword(data) {
  return bcrypt.compare(data, this.password);
}

//pre takes the object being written in the db and allows work to be done on it before going in the db
userSchema.pre('save', function(next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);

      // hash the password using our new salt
      bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) return next(err);
          // override the cleartext password with the hashed one
          user.password = hash;
          next();
      });
  });
});
// DOES NOT WORK WITH INSERTMANY 
//userSchema.pre('insertMany', function(next) {
//   var user = this;

//   // only hash the password if it has been modified (or is new)
//   if (!user.isModified('password')) return next();

//   // generate a salt
//   bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//       if (err) return next(err);

//       // hash the password using our new salt
//       bcrypt.hash(user.password, salt, function(err, hash) {
//           if (err) return next(err);
//           // override the cleartext password with the hashed one
//           user.password = hash;
//           next();
//       });
//   });
// });
const User = model('user', userSchema);
// const checkPassword = checkPassword();
module.exports = User;
