require('dotenv').config(); // Load .env variables

const express = require('express');
const connectDB = require('./database/connect'); 
const contactsRoute = require('./routes/contactsRoute');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

// Middleware
app.use(express.json());

// MongoDB Connection
connectDB();

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the Contacts API');
});

// API Routes
//app.use('/api', contactsRoute);
app.use(contactsRoute);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); //swagger route

// Start Server
app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
