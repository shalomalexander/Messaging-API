const User = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require("../config");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ username });

    // If user not found or password is incorrect
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Create and sign a JWT access token
    const accessToken = jwt.sign(
      {
        userId: user._id,
        username: user.username,
        isAdmin: user.isAdmin,
        createdTime: Date.now(),
      },
      config.jwtSecret
    );

    res.json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.logout = (req, res) => {
  // You can perform any logout-related actions here
  // Removing the token from the client side or
  // expiring the accessToken etc...
  
  res.json({ message: "Logout successful" });
};
