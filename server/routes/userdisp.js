const express = require('express');
const router = express.Router();
const User = require('../models/usercred');

// Define a route to update data in MongoDB
router.put('/', (req, res) => {
  const { userId } = req.query;
  const { score } = req.body;

  User.findByIdAndUpdate(userId, { score }, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    })
    .catch((error) => {
      console.error('Error updating user:', error);
      res.status(500).json({ error: 'Failed to update user' });
    });
});

module.exports = router;
