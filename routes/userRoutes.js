const express = require('express');
const { signup, login, deleteUser } = require('../controllers/userController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.delete('/delete/:id', deleteUser);

module.exports = router;