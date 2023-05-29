// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// const port = 9002;

// // Enable CORS
// app.use(cors());

// // Connect to MongoDB Atlas
// mongoose.connect('mongodb+srv://ivinejoju:ivine2003@cluster0.so2lm4w.mongodb.net/test?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => {
//     console.log('Connected to MongoDB Atlas');
//     app.listen(port, () => {
//       console.log(`Backend server started on port ${port}`);
//     });
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB Atlas:', error);
//   });

// // Define a schema for the "questions" collection
// const questionSchema = new mongoose.Schema({
//   question: String,
//   options: [String],
//   correctAnswer: String
// });

// // Create a model based on the schema
// const Question = mongoose.model('Question', questionSchema);

// // Define a route to fetch data from MongoDB
// app.get('/api/questions', (req, res) => {
//   Question.find()
//     .then((questions) => {
//       res.json(questions);
//     })
//     .catch((error) => {
//       console.error('Error fetching questions:', error);
//       res.status(500).json({ error: 'Failed to fetch questions' });
//     });
// });

// // //******new cont */
