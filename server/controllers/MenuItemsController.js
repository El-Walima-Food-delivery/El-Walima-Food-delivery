const { MenuItem } = require("../models");
const User = require("../models/User");

exports.createMenuItem = async (req, res) => {
  try {
    const {
      name,
      description,
      imageUrl,
      availble,
      likes,
      price,
      category_id,
      Users_id,
    } = req.body;

    if (!category_id || !Users_id) {
      return res
        .status(400)
        .json({ message: "Category ID and User ID are required" });
    }

    const menuItem = await MenuItem.create({
      name,
      description,
      imageUrl,
      availble,
      likes,
      price,
      category_id,
      users_id: Users_id,
    });

    res.status(201).json(menuItem);
  } catch (error) {
    console.error("Error creating menu item:", error);
    if (error.name === "SequelizeForeignKeyConstraintError") {
      return res.status(400).json({
        message: `Invalid ${error.fields[0]}. Make sure the ID exists in the referenced table.`,
      });
    }
    if (error.name === "SequelizeValidationError") {
      return res
        .status(400)
        .json({ message: error.errors.map((e) => e.message) });
    }
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getMenuItemById = async (req, res) => {
  const { id } = req.params;
  const menuItem = await MenuItem.findByPk(id, { include: [User] });
  res.status(200).json(menuItem);
};

exports.updateMenuItem = async (req, res) => {
  const { id } = req.params;
  const { name, description, imageUrl, availble, likes, price, categoryId } =
    req.body;
  const menuItem = await MenuItem.update(
    { name, description, imageUrl, availble, likes, price, categoryId },
    { where: { id } }
  );
  res.status(200).json(menuItem);
};

exports.deleteMenuItem = async (req, res) => {
  const { id } = req.params;
  await MenuItem.destroy({ where: { id } });
  res.status(204).json({ message: "MenuItem deleted successfully" });
};

exports.getMenuItemsByCategory = async (req, res) => {
  try {
    const categoryId = req.params.category_id;
    const menuItems = await MenuItem.findAll({
      where: { category_id: categoryId },
      include: [
        {
          model: User,
        },
      ],
    });
    res.status(200).json(menuItems);
  } catch (error) {
    console.error("Error fetching menu items by category:", error);
    res.status(500).json({ message: "Internal server error" });
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
