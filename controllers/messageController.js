const Group = require('../models/Group');
const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
  try {
    const { groupId, userId, content } = req.body;

    // Check if the user is a member of the group
    const group = await Group.findById(groupId);
    if (!group || !group.members.includes(userId)) {
      return res.status(403).json({ error: 'You are not a member of this group' });
    }

    // Create a new message
    const message = new Message({ groupId, userId, content });
    await message.save();

    res.json({ message: 'Message sent successfully', message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.likeMessage = async (req, res) => {
  try {
    const { messageId, userId } = req.body;

    // Check if the message exists
    const message = await Message.findById(messageId);
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }

    // Check if the user already liked the message
    if (message.likes.includes(userId)) {
      return res.status(400).json({ error: 'You have already liked this message' });
    }

    // Add user to the likes array
    message.likes.push(userId);
    await message.save();

    res.json({ message: 'Message liked successfully', likedBy: userId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
