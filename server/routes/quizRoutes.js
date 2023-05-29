const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz');

// Handle POST request for quiz creation
router.post('/', async (req, res) => {
  try {
    // Get the code from the request body
    const { code } = req.body;

    // Create a new Quiz document
    const quiz = new Quiz({ code });

    // Save the Quiz document to the database
    await quiz.save();

    // Send a success response
    res.status(200).json({ success: true });
  } catch (error) {
    // Send an error response if an exception occurs
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
