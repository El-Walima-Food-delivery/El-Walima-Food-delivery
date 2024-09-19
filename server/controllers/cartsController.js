const db = require("../models/index");

exports.getAllCarts = async (req, res) => {
  try {
    const carts = await db.Cart.findAll();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving carts', error });
  }
};

exports.getCartById = async (req, res) => {
  try {
    const cart = await db.Cart.findByPk(req.params.id);
    if (cart) {
      res.status(200).json(cart);
    } else {
      res.status(404).json({ message: 'Cart not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving cart', error });
  }
};

exports.createCart = async (req, res) => {
  try {
    const newCart = await db.Cart.create(req.body);
    res.status(201).json(newCart);
  } catch (error) {
    res.status(500).json({ message: 'Error creating cart', error });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const [updated] = await db.Cart.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedCart = await db.Cart.findByPk(req.params.id);
      res.status(200).json(updatedCart);
    } else {
      res.status(404).json({ message: 'Cart not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating cart', error });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const deleted = await db.Cart.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json({ message: 'Cart deleted' });
    } else {
      res.status(404).json({ message: 'Cart not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting cart', error });
  }
};

exports.getCartByCustomerId = async (req, res) => {
  try {
    const carts = await db.Cart.findAll({ where: { customer_id: req.params.customerId } });
    if (carts.length > 0) {
      res.status(200).json(carts);
    } else {
      res.status(404).json({ message: 'No carts found for this customer' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving carts by customer', error });
  }
};

exports.getCartByMenuItemId = async (req, res) => {
  try {
    const carts = await db.Cart.findAll({ where: { menuitems_id: req.params.menuItemId } });
    if (carts.length > 0) {
      res.status(200).json(carts);
    } else {
      res.status(404).json({ message: 'No carts found for this menu item' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving carts by menu item', error });
  }
};

exports.getCartByRestaurantOwnerId = async (req, res) => {
  try {
    const carts = await db.Cart.findAll({ where: { restaurant_owner_id: req.params.restaurantOwnerId } });
    if (carts.length > 0) {
      res.status(200).json(carts);
    } else {
      res.status(404).json({ message: 'No carts found for this restaurant owner' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving carts by restaurant owner', error });
  }
};






