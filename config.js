// Setup the MongoDB Connection here.
require('dotenv').config();
const crypto = require('crypto');

module.exports = {
    mongoURI: process.env.MONGODB_URI,
    jwtSecret: crypto.randomBytes(32).toString('hex')
};
  