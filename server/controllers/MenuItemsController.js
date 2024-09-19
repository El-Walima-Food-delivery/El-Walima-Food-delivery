const { MenuItem } = require("../models");

exports.createMenuItem = async (req, res) => {
  const { name, description, imageUrl, availble, likes, price, categoryId } = req.body;
  const menuItem = await MenuItem.create({ name, description, imageUrl, availble, likes, price, categoryId });
  res.status(201).json(menuItem);
};

exports.getMenuItemById = async (req, res) => {
  const { id } = req.params;
  const menuItem = await MenuItem.findByPk(id);
  res.status(200).json(menuItem);
};

exports.updateMenuItem = async (req, res) => {
  const { id } = req.params;
  const { name, description, imageUrl, availble, likes, price, categoryId } = req.body;
  const menuItem = await MenuItem.update({ name, description, imageUrl, availble, likes, price, categoryId }, { where: { id } });
  res.status(200).json(menuItem);
};

exports.deleteMenuItem = async (req, res) => {
  const { id } = req.params;
  await MenuItem.destroy({ where: { id } });
  res.status(204).json({ message: "MenuItem deleted successfully" });
};      
exports.getMenuItemsByCategory = async (req, res) => {
  const { categoryId } = req.params;
  const menuItems = await MenuItem.findAll({ where: { categoryId } });
  res.status(200).json(menuItems);
};      
exports.getMenuItemsByCategory = async (req, res) => {
  try {
    const categoryId = req.params.category_id;
    const menuItems = await MenuItem.findAll({ where: { category_id: categoryId } });
    res.status(200).json(menuItems);
  } catch (error) {
    console.error('Error fetching menu items by category:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
exports.getMenuItemsByName = async (req, res) => {
  const { name } = req.params;
  const menuItems = await MenuItem.findAll({ where: { name } });
  res.status(200).json(menuItems);  
};
exports.getMenuItemsByPrice = async (req, res) => {
  const { price } = req.params;
  const menuItems = await MenuItem.findAll({ where: { price } });
  res.status(200).json(menuItems);
};

exports.getAllMenuItems = async (req, res) => {
  const menuItems = await MenuItem.findAll();
  res.status(200).json(menuItems);
};      
exports.getAllAvailableMenuItems = async (req, res) => {
  const menuItems = await MenuItem.findAll({ where: { availble: true } });
  res.status(200).json(menuItems);
};  
exports.getAllUnavailableMenuItems = async (req, res) => {
  const menuItems = await MenuItem.findAll({ where: { availble: false } });
  res.status(200).json(menuItems);
};  


