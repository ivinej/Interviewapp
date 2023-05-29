const mongoose = require('mongoose');

// Define the user model schema
const userSchema = new mongoose.Schema({
  code: String,
  name: String,
  email: String,
  score: String,
  college: String,
  phone: Number
});

const User = mongoose.model('User', userSchema);

module.exports = User;