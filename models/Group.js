const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  groupName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
  }],
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
