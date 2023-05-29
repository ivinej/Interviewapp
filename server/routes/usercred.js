const express = require('express');
const router = express.Router();
const User = require('../models/usercred');

// Handle POST request for question creation
router.post('/', async (req, res) => {
  try {
    // Create a new question document
    const newUser = new User(req.body);

    // Save the User to the database
    await newUser.save();

    // Send a success response
    res.status(201).json(newUser);
  } catch (error) {
    // Send an error response if an exception occurs
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

module.exports = router;
