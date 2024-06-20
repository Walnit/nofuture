const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

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
        console.log('Table setup completed.');
    } catch (err) {
        console.error('Error setting up the database:', err);
    }
};

setupDatabase();

module.exports = {
    query: (text, params) => pool.query(text, params)
};
