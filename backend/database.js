const { Pool } = require('pg');
const dotenv = require('dotenv');
const winston = require('winston');

dotenv.config();

// logging
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

const setupDatabase = async () => {
    const createTableText = `
    CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        date VARCHAR(255),
        content TEXT
    );`;
    try {
        await pool.query(createTableText);
        logger.info('Table setup completed.');
    } catch (err) {
        logger.error('Error setting up the database:', err);
    }
};

setupDatabase();

module.exports = {
    query: (text, params) => pool.query(text, params)
};
