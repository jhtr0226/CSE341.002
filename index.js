require('dotenv').config(); // Load .env variables

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoUrl = process.env.MONGODB_URL



const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';


mongoose.connect(mongoUrl, { useNewUrlParse: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));



app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});