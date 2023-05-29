const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Atlas configuration
const MONGO_URI = 'mongodb+srv://ivinejoju:ivine2003@cluster0.so2lm4w.mongodb.net/test?retryWrites=true&w=majority';

// Connect to MongoDB Atlas
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.log('Error occurred while connecting to MongoDB:', err);
  });

// Load and use quiz routes
const quizRoutes = require('./routes/quizRoutes');
app.use('/api/quizzes', quizRoutes);

// Load and use question routes
const questionRoutes = require('./routes/questionRoutes');
app.use('/api/questions', questionRoutes);

// Load and use question routes
const usercred = require('./routes/usercred');
app.use('/api/user', usercred);

// To display questions

const displayques = require('./routes/displayques');
app.use('/api/display', displayques)


// To display user score

const userscore = require('./routes/userscore');
app.use('/api/score', userscore)

//to update score
const userdisp = require('./routes/userdisp');
app.use('/api/userdisp', userdisp)

//To import adm auth from db
const admauth = require('./routes/admauth');
app.use('/api/admin', admauth)

//To post test name
const testpost = require('./routes/testpost');
app.use('/api/testp', testpost)

//To get test name
const testget = require('./routes/testget');
app.use('/api/testg', testget)

// Start the server
app.listen(9002, () => {
  console.log('Server is running on port 9002');
});
