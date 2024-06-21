require('dotenv').config();
const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;
if (!secretKey) {
  throw new Error('JWT_SECRET is not defined in the environment variables');
}

const payload = {
  name: 'Your Name',
};

const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

console.log('Generated JWT Token:', token);
