const mongoose = require('mongoose');

// Define the Admin model schema
const admSchema = new mongoose.Schema({
  user: String,
  passworrd: String,


});

const Admin = mongoose.model('Admin', admSchema);

module.exports = Admin;
