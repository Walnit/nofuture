const jwt = require('jsonwebtoken');

const authenticateToken = (request, response, next) => {
    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return response.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.error('JWT Error:', err);
            return response.sendStatus(403);
        }
        request.user = user;
        next();
    });
};

module.exports = authenticateToken;
