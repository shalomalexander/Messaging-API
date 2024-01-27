// Setup the MongoDB Connection here.
require('dotenv').config();
module.exports = {
    mongoURI: process.env.MONGODB_URI,
};
  