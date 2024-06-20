require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authenticateToken = require('./middleware');
const db = require('./database');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors()); // for cross origin requests

// Public route
app.get('/', (request, response) => {
  response.send('Hello World!');
});

// Dynamic fetching of events from the database
app.get('/events', async (request, response) => {
  try {
    const result = await db.query('SELECT * FROM events');
    response.json(result.rows);
  } catch (err) {
    console.error('Failed to fetch events:', err);
    response.status(500).send('Server error');
  }
});

// Secure route that requires authentication
app.get('/secure', authenticateToken, (request, response) => {
  response.send(`Hello, ${request.user.name}! This is a secure area.`);
});

// Server setup
function start() {
  server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  }).on('error', err => {
    console.error('Error starting server:', err);
  });
}

module.exports = { app, start };
