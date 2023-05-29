const mongoose = require('mongoose');

// Define the Quiz model schema
const quizSchema = new mongoose.Schema({
  code: String,
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
