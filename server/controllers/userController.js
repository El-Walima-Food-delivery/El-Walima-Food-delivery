const db = require('../model/_index');
const User = db.User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');



dotenv.config();



exports.findAll = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ['id', 'firstName', 'lastName', 'email'],
            include: [
                {
                    model: db.Cart,
                    as: 'carts',
                    include: [{
                        model: db.Product,
                        as: 'product',
                        attributes: ['id', 'name', 'price']
                    }]
                },
                {
                    model: db.Wishlist,
                    as: 'wishlists',
                    include: [{
                        model: db.Product,
                        as: 'product',
                        attributes: ['id', 'name', 'price']
                    }]
                }
            ]
        });

        res.status(200).json({
            message: "Users retrieved successfully",
            users: users
        });
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({ message: "Error retrieving users", error: error.message });
    }
};

exports.findOne = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id, {
            attributes: ['id', 'firstName', 'lastName', 'email'],
            include: [
                {
                    model: db.Cart,
                    as: 'carts',
                    include: [{
                        model: db.Product,
                        as: 'product',
                        attributes: ['id', 'name', 'price']
                    }]
                },
                {
                    model: db.Wishlist,
                    as: 'wishlists',
                    include: [{
                        model: db.Product,
                        as: 'product',
                        attributes: ['id', 'name', 'price']
                    }]
                }
            ]
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            message: "User retrieved successfully",
            user: user
        });
    } catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).json({ message: "Error retrieving user", error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, email } = req.body;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        await user.update({ firstName, lastName, email });

        res.status(200).json({
            message: "User updated successfully",
            user: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: "Error updating user", error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        await user.destroy();

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: "Error deleting user", error: error.message });
    }
};





exports.getProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      success: true,
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: "Error fetching user profile", error: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { firstName, lastName, email, currentPassword, newPassword } = req.body;

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (currentPassword && newPassword) {
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        return res.status(403).json({ message: "Current password is incorrect" });
      }
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await user.update({ firstName, lastName, email, password: hashedPassword });
    } else {
      await user.update({ firstName, lastName, email });
    }

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: { id: user.id, firstName, lastName, email }
    });
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ message: "Error updating user profile", error: error.message });
  }
};

// ... existing code ...