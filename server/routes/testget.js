const express = require('express');
const router = express.Router();
const Testname = require('../models/testname');

// Define a route to fetch data from MongoDB
router.get('/', (req, res) => {
    Testname.find()
    .then((test) => {
      res.json(test);
    })
    .catch((error) => {
      console.error('Error fetching test:', error);
      res.status(500).json({ error: 'Failed to fetch test' });
    });
});

module.exports=router;