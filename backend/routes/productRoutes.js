const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get all products
router.get('/', async (req, res) => {
  try {
    const [products] = await db.execute('SELECT * FROM products ORDER BY created_at DESC');
    res.json(products);
  } catch (error) {
    console.error('Products Error:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Get a single product
router.get('/:id', async (req, res) => {
  try {
    const [products] = await db.execute('SELECT * FROM products WHERE id = ?', [req.params.id]);
    if (products.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(products[0]);
  } catch (error) {
    console.error('Product Error:', error);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

module.exports = router;
