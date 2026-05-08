const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');

// User Registration
// Payload: { "email": "user@example.com", "password": "pwd", "name": "John" }
router.post('/register', (req, res) => {
  res.json({ message: 'User registered successfully. Please verify email.' });
});

// User Login
// Payload: { "email": "user@example.com", "password": "pwd" }
router.post('/login', (req, res) => {
  res.json({ token: 'jwt_token_example', user: { id: 1, name: 'John Doe', role: 'user' } });
});

// Firebase / Google Direct Login Webhook
// Payload: { "firebaseToken": "firebase_id_token" }
router.post('/oauth/google', (req, res) => {
  res.json({ token: 'jwt_token_example', user: { id: 1, name: 'Google User', role: 'user' } });
});

// Get User Profile
router.get('/me', verifyToken, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
