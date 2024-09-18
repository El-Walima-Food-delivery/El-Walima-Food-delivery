const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Get all categories
router.get('/', categoryController.getAllCategories);

// Get category by id
router.get('/:id', categoryController.getCategoryById);

// Get category by name
router.get('/name/:name', categoryController.getCategoryByName);

// Create new category
router.post('/', categoryController.createCategory);

// Update a category
router.put('/:id', categoryController.updateCategory);

// Delete a category (if needed, you can add this method)
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCategory = await db.Category.destroy({ where: { id } });
    if (deletedCategory) {
      res.status(200).json({ message: "Category deleted successfully" });
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;