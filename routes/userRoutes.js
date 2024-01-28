const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/create', userController.createUser);
router.put('/edit/:userId', authMiddleware.verifyToken, userController.editUser);
router.get('/get', userController.getAllUsers);

module.exports = router;
