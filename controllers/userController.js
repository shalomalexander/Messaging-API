const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const { username, password, isAdmin } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.editUser = async (req, res) => {
  // Implement logic to edit user
  try {
    const { userId } = req.params;
    const { username, password, isAdmin } = req.body;

    // Find the user by ID
    const user = await User.findById(userId);

    // If user not found
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update user properties if provided in the request
    if (username) {
      user.username = username;
    }

    if (password) {
      user.password = password;
    }

    if (isAdmin !== undefined) {
      user.isAdmin = isAdmin;
    }

    // Save the updated user
    await user.save();

    res.json({ message: 'User updated successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, 'username isAdmin'); // Retrieve only necessary fields

    res.json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
