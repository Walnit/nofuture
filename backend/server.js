require('dotenv').config();
const express = require('express');
const authenticateToken = require('./middleware');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let events = [
  {id: 1, date: "13 Mar", content: "NYP Open House"},
  {id: 2, date: "15 Mar", content: "Pharmaceutical Conferences"},
  {id: 3, date: "16 Mar", content: "Dialogue Sessions by Industrial Experts, Networking Session"}
];

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
