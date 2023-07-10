const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const { findOne } = require("./todoModel");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static method for a signup

userSchema.statics.signup = async function (email, password) {
  // some validation
  const exists = await this.findOne({ email });

  if (!email | !password) {
    throw Error("All fields must be filled in");
  }

  if (!validator.isEmail(email)) {
    throw Error("Please enter a valid e-mail address");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error(
      "Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a number and a symbol."
    );
  }

  if (exists) {
    throw Error("Email already in use");
  }

  // hashing password

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hashedPassword });

  return user;
};

// static method for login

userSchema.statics.login = async function (email, password) {
  //validation

  if (!email | !password) {
    throw Error("All fields must be filled in");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect e-mail address");
  }

  const isMatching = await bcrypt.compare(password, user.password);
  if (!isMatching) {
    throw Error("Incorrect password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
