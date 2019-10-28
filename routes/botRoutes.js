const express = require('express');
const router = express.Router();
const fileIO = require('../Utils/functions/fileIO');

// Basic Routes

// Get all records
router.get('/', (req, res) => {
  try {
    res.send('Get all');
  } catch (error) {
    res.status(500).json({
      message: error.message,
      route: 'GET /bot/',
    });
  }
});

// Get one record
router.get('/:id', async (req, res) => {
  let fileData = await fileIO.readFile('database/bot.csv');
  res.status(200).send({
    data: fileData,
  });
});

// create one record
router.post('/', (req, res) => {
  res.send('create one');
});

// update one record
router.patch('/:id', (req, res) => {
  res.send('update one');
});

// delete one record
router.get('/:id', (req, res) => {
  res.send('delete one');
});

module.exports = router;
