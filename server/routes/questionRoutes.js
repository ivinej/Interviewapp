const express = require('express');
const router = express.Router();
const Question = require('../models/question');

// Handle POST request for question creation
router.post('/', async (req, res) => {
  try {
    // Create a new question document
    const newQuestion = new Question(req.body);

    // Save the question to the database
    await newQuestion.save();

    // Send a success response
    res.status(201).json(newQuestion);
  } catch (error) {
    // Send an error response if an exception occurs
    console.error('Error creating question:', error);
    res.status(500).json({ error: 'Failed to create question' });
  }
});

module.exports = router;
