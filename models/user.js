const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  // Username
  username: {
    type: String,
    required: true
  },
  // Password
  password: {
    type: String,
    required: true
  },
  // Amatuer, professional, etc
  abilityLevel: {
    type: String,
    required: true
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
