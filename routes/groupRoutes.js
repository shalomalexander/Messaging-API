const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');

router.post('/create', groupController.createGroup);
router.post('/delete/:groupId', groupController.deleteGroup);
router.post('/search', groupController.searchGroups);
router.put('/edit/:groupId', groupController.editGroup);

module.exports = router;
