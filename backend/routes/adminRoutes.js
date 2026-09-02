const express = require('express');
const router = express.Router();
const db = require('../config/db');
const { verifyToken, requireRole } = require('../middleware/authMiddleware');

// Only allow superadmin and subadmin
router.use(verifyToken);
router.use(requireRole(['superadmin', 'subadmin']));

// Get Dashboard Stats
router.get('/stats', async (req, res) => {
  try {
    const [users] = await db.execute('SELECT COUNT(*) as total FROM users');
    const [products] = await db.execute('SELECT COUNT(*) as total FROM products');
    const [orders] = await db.execute('SELECT COUNT(*) as total FROM orders');
    const [revenue] = await db.execute('SELECT SUM(total_amount) as total FROM orders WHERE status = "completed"');

    res.json({
      totalUsers: users[0].total,
      totalProducts: products[0].total,
      totalOrders: orders[0].total,
      totalRevenue: revenue[0].total || 0
    });
  } catch (error) {
    console.error('Admin Stats Error:', error);
    res.status(500).json({ error: 'Failed to fetch admin stats' });
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const [users] = await db.execute('SELECT id, name, email, role, created_at FROM users ORDER BY created_at DESC');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

module.exports = router;
