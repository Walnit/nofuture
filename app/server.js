require('dotenv').config();
const express = require('express');
const authenticateToken = require('./middleware');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Public route
app.get('/', (request, response) => {
  response.send('Hello World!');
});

// Secure route
app.get('/secure', authenticateToken, (request, response) => {
  response.send(`Hello, ${request.user.name}! This is a secure area.`);
});

let server;

function start() {
  server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  }).on('error', err => {
    console.error('Error starting server:', err);
  });
}

module.exports = { app, start, server };
