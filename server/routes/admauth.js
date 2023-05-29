const express = require('express');
const router = express.Router();
const Admin = require('../models/admauth.js');

// Define a route to fetch data from MongoDB
router.get('/', (req, res) => {
  Admin.find()
    .then((admins) => {
      res.json(admins);
    })
    .catch((error) => {
      console.error('Error fetching admins:', error);
      res.status(500).json({ error: 'Failed to fetch admins' });
    });
});

module.exports=router;