const express = require('express');
const router = express.Router();
const authenticateToken = require('./middleware');
const db = require('./database');

// Public route
router.get('/', (req, res) => {
    res.send('Hello World!');
});

// dynamically fetch from the db
router.get('/events', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM events');
        res.json(result.rows);
    } catch (err) {
        console.error('Database query error', err);
        res.status(500).send('Error fetching events');
    }
});

// Secure route
router.get('/secure', authenticateToken, (req, res) => {
    res.send(`Hello, ${req.user.name}! This is a secure area.`);
});

module.exports = router;
