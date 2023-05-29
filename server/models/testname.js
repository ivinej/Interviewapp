const mongoose = require('mongoose');

// Define the Quiz model schema
const testSchema = new mongoose.Schema({
  code: String,
  testname: String
});

const Testname = mongoose.model('Testname', testSchema);

module.exports = Testname;