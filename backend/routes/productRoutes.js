const express = require('express');
const router = express.Router();
const { verifyToken, requireRole, requirePermission } = require('../middleware/authMiddleware');

// Get all products (Public)
router.get('/', (req, res) => {
  res.json({ products: [{ id: 1, name: 'enext Watch Ultra', price: 299 }] });
});

// Get single product (Public)
router.get('/:id', (req, res) => {
  res.json({ product: { id: req.params.id, name: 'enext Watch Ultra', price: 299 } });
});

// Create product (Admin / Subadmin with 'products' permission)
// Payload: { "name": "New Product", "price": 99, "sku": "ENX-123" }
router.post('/', verifyToken, requireRole(['superadmin', 'subadmin']), requirePermission('manage_products'), (req, res) => {
  res.status(201).json({ message: 'Product created successfully', product: req.body });
});

// Update product
router.put('/:id', verifyToken, requireRole(['superadmin', 'subadmin']), requirePermission('manage_products'), (req, res) => {
  res.json({ message: `Product ${req.params.id} updated` });
});

// Delete product
router.delete('/:id', verifyToken, requireRole(['superadmin', 'subadmin']), requirePermission('manage_products'), (req, res) => {
  res.json({ message: `Product ${req.params.id} deleted` });
});

module.exports = router;
