const express = require('express');
const router = express.Router();
const db = require('../config/db');
const { verifyToken } = require('../middleware/authMiddleware');

// Place an order
router.post('/', verifyToken, async (req, res) => {
  const { total_amount, shipping_address } = req.body;
  const user_id = req.user.id;

  try {
    const [result] = await db.execute(
      'INSERT INTO orders (user_id, total_amount, shipping_address, status) VALUES (?, ?, ?, ?)',
      [user_id, total_amount, shipping_address || '', 'pending']
    );
    res.status(201).json({ message: 'Order placed successfully', orderId: result.insertId });
  } catch (error) {
    console.error('Order Error:', error);
    res.status(500).json({ error: 'Failed to place order' });
  }
});

// Get user orders
router.get('/', verifyToken, async (req, res) => {
  try {
    const [orders] = await db.execute('SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC', [req.user.id]);
    res.json(orders);
  } catch (error) {
    console.error('Orders Error:', error);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

module.exports = router;
