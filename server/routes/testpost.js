const express = require('express');
const router = express.Router();
const Testname = require('../models/testname');

// Handle POST request for question creation
router.post('/', async (req, res) => {
  try {
    // Create a new question document
    const newTestname = new Testname(req.body);

    // Save the Testname to the database
    await newTestname.save();

    // Send a success response
    res.status(201).json(newTestname);
  } catch (error) {
    // Send an error response if an exception occurs
    console.error('Error creating Testname:', error);
    res.status(500).json({ error: 'Failed to create Testname' });
  }
});

module.exports = router;
