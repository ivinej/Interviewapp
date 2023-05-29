// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const app = express();
// app.use(express.json());
// app.use(cors());

// // MongoDB Atlas configuration
// const MONGO_URI = 'mongodb+srv://ivinejoju:ivine2003@cluster0.so2lm4w.mongodb.net/test?retryWrites=true&w=majority';

// // Connect to MongoDB Atlas
// mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB Atlas');
//   })
//   .catch(error => {
//     console.error('Error connecting to MongoDB Atlas:', error);
//   });

// // Define the Quiz model
// const Quiz = mongoose.model('Quiz', {
//   code: String,
// });

// // Handle POST request for quiz creation
// app.post('/api/quizzes', async (req, res) => {
//   try {
//     // Get the code from the request body
//     const { code } = req.body;

//     // Create a new Quiz document
//     const quiz = new Quiz({ code });

//     // Save the Quiz document to the database
//     await quiz.save();

//     // Send a success response
//     res.status(200).json({ success: true });
//   } catch (error) {
//     // Send an error response if an exception occurs
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Start the server
// app.listen(9002, () => {
//   console.log('Server is running on port 9002');
// });
