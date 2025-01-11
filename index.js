require('dotenv').config(); // Load .env variables

const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();



const app = express();
const mongoUrl = process.env.MONGODB_URL
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';


//Middleware
app.use(express.json());

//MongoDB Connection
mongoose.connect(mongoUrl)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));


//Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

router.get('/home', (req, res) => {
  res.send('Welcome!')
});




app.use('/', router);



app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});