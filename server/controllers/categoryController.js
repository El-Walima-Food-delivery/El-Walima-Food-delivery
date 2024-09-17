const db = require("../models/index");

exports.getAllCategories = async (req, res) => {
  try {
    const Category = await db.Category.findAll();
    res.status(200).json(Category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await db.Category.findByPk(id);
    if (category) {
      res.status(200).json(category);
    } else {
      res.status(404).json({ message: "Category not found" });
    }   
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};                          
exports.getCategoryByName = async (req, res) => {
  const { name } = req.params;
  try {
    const category = await db.Category.findOne({ where: { name } });
    if (category) {
      res.status(200).json(category);
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.createCategory = async (req, res) => {
  const { name, imageUrl } = req.body;
  try {
    const newCategory = await db.Category.create({ name, imageUrl });
    res.status(201).json(newCategory);  
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, imageUrl } = req.body;
  try {
    const [updatedRows] = await db.Category.update({ name, imageUrl }, { where: { id } });  
    if (updatedRows) {
      res.status(200).json({ message: "Category updated successfully" });
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};  