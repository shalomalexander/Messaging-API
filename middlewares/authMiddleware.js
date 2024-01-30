const jwt = require('jsonwebtoken');
const config = require('../config');

exports.verifyAccessToken  = (req, res, next) => {
  // Extract the access token from the Authorization header
  const accessToken = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!accessToken) {
    return res.status(401).json({ error: 'Unauthorized - Access token missing' });
  }

  try {
    // Verify the access token using the secret key
    const decoded = jwt.verify(accessToken, config.jwtSecret);
  
    // Check if the access token is older than 10 minutes
    const currentTime = Date.now();
    const tokenCreationTime = decoded.createdTime || currentTime; // Use token creation time if available
    const tokenAge = currentTime - tokenCreationTime;
    const tokenMaxAge = 10 * 60 * 1000; // 10 minutes in milliseconds

    if (tokenAge > tokenMaxAge) {
      return res.status(401).json({ error: 'Unauthorized - Access token expired' });
    }

    // Attach the decoded user information to the request for later use
    req.user = decoded;

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: 'Unauthorized - Invalid token' });
  }
};