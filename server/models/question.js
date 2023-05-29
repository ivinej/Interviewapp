const mongoose = require('mongoose');

// Define the Question model schema
const questionSchema = new mongoose.Schema({
  code: String,
  question: String,
  options: [String],
  correctAnswer: String

});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
