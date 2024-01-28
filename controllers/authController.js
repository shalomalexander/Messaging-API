const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config');

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ username });
    console.log(username, password, user)
    // If user not found or password is incorrect
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Create and sign a JWT token
    const token = jwt.sign({ userId: user._id, username: user.username, isAdmin: user.isAdmin }, config.jwtSecret);

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.logout = (req, res) => {
  // You can perform any logout-related actions here
  res.json({ message: 'Logout successful' });
};
