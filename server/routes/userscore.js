const express = require('express');
const router = express.Router();
const User = require('../models/usercred');

// Define a route to fetch data from MongoDB
router.get('/', (req, res) => {
    User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Failed to fetch users' });
    });
});

module.exports=router;