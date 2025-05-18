const express = require('express');
const router = express.Router();
const CustomerHomeController = require('../Controllers/CustomerHomeControllers');

// GET /api/customer-home/category/:categoryId/user/:userId
router.get('/category/:categoryId/user/:userId', CustomerHomeController.getStoresInCategoryByUserState);

module.exports = router;
