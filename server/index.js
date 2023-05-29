



////*********** */


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://ivinejoju:ivine2003@cluster0.so2lm4w.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected correctly to MongoDB Atlas');

    // Define a schema for the "questions" collection
    const questionSchema = new mongoose.Schema({
      question: String,
      options: [String],
      correctAnswer: String
    });

    // Create a model based on the schema
    const Question = mongoose.model('Question', questionSchema);

    app.post('/api/questions', (req, res) => {
      // Create a new question document
      const newQuestion = new Question(req.body);

      // Save the question to the database
      newQuestion.save()
        .then((question) => {
          console.log('Question created:', question);
          res.status(201).json(question);
        })
        .catch((error) => {
          console.error('Error creating question:', error);
          res.status(500).json({ error: 'Failed to create question' });
        });
    });

    app.listen(9002, () => {
      console.log('Back-end started at port 9002');
    });
  })
  .catch((err) => {
    console.log('Error occurred while connecting to MongoDB:', err);
  });



