const express = require('express');
const router = express.Router();
const Question = require('../models/question');

// Define a route to fetch data from MongoDB
router.get('/', (req, res) => {
  Question.find()
    .then((questions) => {
      res.json(questions);
    })
    .catch((error) => {
      console.error('Error fetching questions:', error);
      res.status(500).json({ error: 'Failed to fetch questions' });
    });
});

module.exports=router;