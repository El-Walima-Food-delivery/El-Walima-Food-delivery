const { Op } = require("sequelize");
const MenuItem = require("../models/MenuItem");
const User = require("../models/User");

exports.searchProductsAndRestaurants = async (req, res) => {
  try {
    const { q } = req.query;

    const restaurants = await User.findAll({
      where: {
        role: "restaurant_owner",
        name: {
          [Op.like]: `%${q}%`,
        },
      },
      attributes: ["id", "name", "email", "imagesUrl", "location"],
    });

    const menuItems = await MenuItem.findAll({
      where: {
        name: {
          [Op.like]: `%${q}%`,
        },
      },
      include: [
        {
          model: User,
          where: { role: "restaurant_owner" },
        },
      ],
    });

    res.json({ restaurants, menuItems });
  } catch (error) {
    console.error("Search error:", error);
    res
      .status(500)
      .json({ message: "Error performing search", error: error.message });
  }
};
