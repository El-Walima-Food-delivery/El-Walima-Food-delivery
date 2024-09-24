const { Order, OrderItem, MenuItem, User, Delivery } = require("../models");

module.exports = {
  createOrder: async (req, res) => {
    try {
      const { items } = req.body;

      const order = await Order.create({
        user_id: req.user.id,
        status: "pending",
        total_amount: 0,
      });

      let totalAmount = 0;

      for (const item of items) {
        const menuItem = await MenuItem.findByPk(item.id);
        if (!menuItem) {
          throw new Error(`Menu item with id ${item.id} not found`);
        }

        await OrderItem.create({
          order_id: order.id,
          menu_item_id: item.id,
          quantity: item.quantity,
          price: menuItem.price,
        });

        totalAmount += menuItem.price * item.quantity;
      }

      await order.update({ total_amount: totalAmount });

      // Assign a delivery driver (for simplicity, we'll assign the first available driver)
      const driver = await User.findOne({ where: { role: "driver" } });
      if (driver) {
        const delivery = await Delivery.create({
          order_id: order.id,
          driver_id: driver.id,
          status: "assigned",
          current_location: { type: "Point", coordinates: [0, 0] },
        });

        // Include delivery information in the response
        res.status(201).json({
          message: "Order created successfully",
          order,
          delivery: {
            id: delivery.id,
            driver: {
              name: driver.name,
              email: driver.email,
            },
          },
        });
      } else {
        res.status(201).json({
          message: "Order created successfully, but no driver available",
          order,
        });
      }
    } catch (error) {
      console.error("Error creating order:", error);
      res
        .status(400)
        .json({ message: "Error creating order", error: error.message });
    }
  },
  getOrderById: async (req, res) => {},
  updateOrder: async (req, res) => {},
  deleteOrder: async (req, res) => {},
  updateOrderStatus: async (req, res) => {
    try {
      const { orderId, status } = req.body;
      const order = await Order.findByPk(orderId);

      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }

      await order.update({ status });

      // Update the delivery status as well
      const delivery = await Delivery.findOne({ where: { order_id: orderId } });
      if (delivery) {
        await delivery.update({ status });
      }

      // Emit a socket event to notify the client about the status change
      req.app.get("io").emit(`orderStatus-${orderId}`, { status });

      res
        .status(200)
        .json({ message: "Order status updated successfully", order });
    } catch (error) {
      res
        .status(400)
        .json({ message: "Error updating order status", error: error.message });
    }
  },
};
exports.getDashboardData = async (req, res) => { 
  try {
    const id = req.user.id;
    const whereClause = { users_id: id };

    const totalOrders = await Order.count({ where: whereClause });
    const pendingOrders = await Order.count({ where: { ...whereClause, status: "pending" } });
    const completedOrders = await Order.count({ where: { ...whereClause, status: "completed" } });
    const revenue = await Order.sum("total_amount", { where: whereClause });

    res.status(200).json({
      totalOrders,
      pendingOrders,
      completedOrders,
      revenue,
    });

  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
