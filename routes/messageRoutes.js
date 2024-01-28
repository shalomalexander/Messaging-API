const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// Route to send a message to a group
router.post('/send', messageController.sendMessage);

// Route to like a message
router.post('/like', messageController.likeMessage);

module.exports = router;
