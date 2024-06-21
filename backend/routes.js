const express = require('express');
const router = express.Router();
const authenticateToken = require('./middleware');
const db = require('./database');

// Public route
router.get('/', (request, response) => {
    response.send('Hello World!');
});

// dynamically fetch from the db
router.get('/events', async (request, response) => {
    try {
        const result = await db.query('SELECT * FROM events');
        response.json(result.rows);
    } catch (err) {
        console.error('Database query error', err);
        response.status(500).send('Error fetching events');
    }
});

// autocomplete
router.get('/events/autocomplete', async(request, response) => {
    const searchTerm = request.query.q;
    if (!searchTerm) {
        return response.status(400).send('Query perimeter "q" is required');
    }

    try {
        const result = await db.query(
            'SELECT * FROM events WHERE content ILIKE $1',
            ['%${searchTerm}%']
        );
        response.json(result.rows);
    } catch (err) {
        console.error('Database query error', err);
        response.status(500).send('Error fetching autocomplete results');
    }
});

// Secure route
router.get('/secure', authenticateToken, (request, response) => {
    response.send(`Hello, ${request.user.name}! This is a secure area.`);
});

module.exports = router;
