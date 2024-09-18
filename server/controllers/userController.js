const db = require("../models/index");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await db.User.findByPk(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });  
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.createUser = async (req, res) => {
  const { name, email, password, imagesUrl, balance, location, role } = req.body;
  try {
    const newUser = await db.User.create({ name, email, password, imagesUrl, balance, location, role });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, imagesUrl, balance, location, role } = req.body;
  try {
    const updatedUser = await db.User.update({ name, email, password, imagesUrl, balance, location, role }, { where: { id } });
    if (updatedUser[0] === 1) {
      res.status(200).json({ message: "User updated successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getAllUsersRestaurant = async (req, res) => {
    try {
      const users = await db.User.findAll({ where: { role: "restaurant_owner" } });
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
 

  exports.findNearbyRestaurants = async (req, res) => {
    const { userId, radius = 1000 } = req.body; // Radius in meters
  
    try {
      // 1. Retrieve the user's information
      const user = await db.User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found.' });
      }
  
      // Check if the user is a customer
      if (user.role !== 'customer') {
        return res.status(403).json({ error: 'The user is not a customer.' });
      }
  
      // Get the customer's location
      const customerLocation = user.location;
      if (!customerLocation) {
        return res.status(404).json({ error: 'Customer location not found.' });
      }
  
      // Construct the POINT for the customer's location
      const customerPoint = `POINT(${customerLocation.coordinates[0]} ${customerLocation.coordinates[1]})`;
  
      // 2. Find nearby restaurants
      const nearbyRestaurants = await db.User.findAll({
        attributes: [
          'id',
          'name',
          [Sequelize.literal('ST_AsText(location)'), 'location'],
          [Sequelize.literal(`ST_Distance_Sphere(location, ST_GeomFromText('${customerPoint}'))`), 'distance']
        ],
        where: {
          role: 'restaurant_owner',
          [Sequelize.Op.and]: Sequelize.literal(`ST_Distance_Sphere(location, ST_GeomFromText('${customerPoint}')) < ${radius}`)
        }
      });
  
      res.status(200).json(nearbyRestaurants);
  
    } catch (error) {
      console.error('Error finding nearby restaurants:', error);
      res.status(500).json({ error: 'An error occurred while finding nearby restaurants.' });
    }
  };
  exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedUser = await db.User.destroy({ where: { id } });
      if (deletedUser === 1) {
        res.status(200).json({ message: "User deleted successfully" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };