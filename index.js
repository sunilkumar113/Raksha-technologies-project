require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const authRoutes = require('./routes/auth');

app.use('/auth', authRoutes);

const dataRoutes = require('./routes/data');

app.use('/api/data', dataRoutes);



// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://sunilkumarkumaresan:xog2QFpnSxXlzgpi@myprojects.1kv5gvj.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

