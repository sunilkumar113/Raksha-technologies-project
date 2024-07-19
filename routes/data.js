const express = require('express');
const Data = require('../models/Data');
const router = express.Router();

// Get all data
router.get('/', async (req, res) => {
  const data = await Data.find();
  res.json(data);
});

// Get data by ID
router.get('/:id', async (req, res) => {
  const data = await Data.findById(req.params.id);
  res.json(data);
});

// Create new data
router.post('/', async (req, res) => {
  const newData = new Data(req.body);
  await newData.save();
  res.status(201).json(newData);
});

// Update data
router.put('/:id', async (req, res) => {
  const updatedData = await Data.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedData);
});

// Delete data
router.delete('/:id', async (req, res) => {
  await Data.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
