const { where, Model } = require("sequelize");
const db = require("../models/index");

exports.getAllCarts = async (req, res) => {
  try {
    const carts = await db.Cart.findAll();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving carts", error });
  }
};

exports.getCartById = async (req, res) => {
  console.log(
    "888888888888888888888888888888888888888888888888888888888 ",
    req.user.id
  );
  try {
    const carts = await db.Cart.findAll({
      where: { customer_id: req.user.id },
      include: [
        {
          model: db.MenuItem,
          attributes: ["id", "name", "price", "imageUrl"],
        },
      ],
    });

    if (carts.length > 0) {
      const cartsWithNumberPrice = carts.map((cart) => ({
        ...cart.toJSON(),
        MenuItem: {
          ...cart.MenuItem.toJSON(),
          price: parseFloat(cart.MenuItem.price),
        },
      }));
      res.status(200).json(cartsWithNumberPrice);
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    console.error("Error retrieving cart:", error);
    res
      .status(500)
      .json({ message: "Error retrieving cart", error: error.message });
  }
};

exports.createCart = async (req, res) => {
  try {
    const { id } = req.user;
    const { restaurant_owner_id, menuitems_id, quantity } = req.body;

    // Validate customer role
    const customer = await db.User.findByPk(id);
    if (!customer || customer.role !== "customer") {
      return res.status(400).json({ message: "Invalid customer ID" });
    }

    // Validate restaurant owner role
    const restaurantOwner = await db.User.findByPk(restaurant_owner_id);
    if (!restaurantOwner || restaurantOwner.role !== "restaurant_owner") {
      return res.status(400).json({ message: "Invalid restaurant owner ID" });
    }

    // Check if the item already exists in the cart
    const existingCartItem = await db.Cart.findOne({
      where: {
        customer_id: id,
        restaurant_owner_id,
        menuitems_id,
      },
      include: [
        {
          model: db.MenuItem,
          attributes: ["id", "name", "price", "imageUrl"],
        },
      ],
    });

    if (existingCartItem) {
      // If the item exists, update the quantity
      existingCartItem.quantity += quantity;
      await existingCartItem.save();
      res.status(200).json(existingCartItem);
    } else {
      // If the item doesn't exist, create a new cart item
      const newCart = await db.Cart.create({
        customer_id: id,
        restaurant_owner_id,
        menuitems_id,
        quantity,
      });
      const newCartWithMenuItem = await db.Cart.findOne({
        where: { id: newCart.id },
        include: [
          {
            model: db.MenuItem,
            attributes: ["id", "name", "price", "imageUrl"],
          },
        ],
      });
      res.status(201).json(newCartWithMenuItem);
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error creating cart", error: error.message });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const updated = await db.Cart.update(req.body, {
      where: { menuitems_id: req.params.id },
    });
    console.log(updated, "updated");

    if (updated) {
      const updatedCart = await db.Cart.findOne({
        where: { menuitems_id: req.params.id },
        include: [
          {
            model: db.MenuItem,
            attributes: ["id", "name", "price", "imageUrl"],
          },
        ],
      });
      res.status(200).json(updatedCart);
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating cart", error });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const deleted = await db.Cart.destroy({
      where: { menuitems_id: req.params.id },
    });
    if (deleted) {
      res.status(204).json({ message: "Cart deleted" });
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting cart", error });
  }
};

exports.getCartByCustomerId = async (req, res) => {
  try {
    const carts = await db.Cart.findAll({
      where: { customer_id: req.params.customerId },
    });
    if (carts.length > 0) {
      res.status(200).json(carts);
    } else {
      res.status(404).json({ message: "No carts found for this customer" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving carts by customer", error });
  }
};

exports.getCartByMenuItemId = async (req, res) => {
  try {
    const carts = await db.Cart.findAll({
      where: { menuitems_id: req.params.menuItemId },
    });
    if (carts.length > 0) {
      res.status(200).json(carts);
    } else {
      res.status(404).json({ message: "No carts found for this menu item" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving carts by menu item", error });
  }
};

exports.getCartByRestaurantOwnerId = async (req, res) => {
  try {
    const carts = await db.Cart.findAll({
      where: { restaurant_owner_id: req.params.restaurantOwnerId },
    });
    if (carts.length > 0) {
      res.status(200).json(carts);
    } else {
      res
        .status(404)
        .json({ message: "No carts found for this restaurant owner" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving carts by restaurant owner", error });
  }
};

exports.clearCart = async (req, res) => {
  const { id } = req.user;
  try {
    await db.Cart.destroy({
      where: { customer_id: id },
    });
    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error clearing cart", error });
  }
};
