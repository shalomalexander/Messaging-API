const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create', userController.createUser);
router.put('/edit/:userId', userController.editUser);
router.get('/get', userController.getAllUsers);

module.exports = router;
