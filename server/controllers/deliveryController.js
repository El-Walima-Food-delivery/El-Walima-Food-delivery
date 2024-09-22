const { Delivery, Order, User } = require("../models");

exports.updateDeliveryLocation = async (req, res) => {
  const { deliveryId, latitude, longitude } = req.body;

  try {
    const delivery = await Delivery.findByPk(deliveryId);
    if (!delivery) {
      return res.status(404).json({ message: "Delivery not found" });
    }

    await delivery.update({
      current_location: { type: "Point", coordinates: [longitude, latitude] },
    });

    req.app
      .get("io")
      .emit(`deliveryUpdate-${delivery.order_id}`, { latitude, longitude });

    res.status(200).json({ message: "Location updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating location", error: error.message });
  }
};

exports.getDeliveryStatus = async (req, res) => {
  const { orderId } = req.params;

  try {
    const delivery = await Delivery.findOne({
      where: { order_id: orderId },
      include: [
        { model: User, as: "driver", attributes: ["name", "email"] },
        { model: Order, attributes: ["id", "status"] },
      ],
    });

    if (!delivery) {
      return res.status(404).json({ message: "Delivery not found" });
    }
    res.status(200).json(delivery);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching delivery status",
      error: error.message,
    });
  }
};

exports.assignDelivery = async (req, res) => {
  const { orderId, driverId } = req.body;

  try {
    const order = await Order.findByPk(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    const driver = await User.findOne({
      where: { id: driverId, role: "driver" },
    });
    if (!driver) {
      return res.status(404).json({ message: "Driver not found" });
    }

    const delivery = await Delivery.create({
      order_id: orderId,
      driver_id: driverId,
      status: "assigned",
    });

    res.status(201).json(delivery);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error assigning delivery", error: error.message });
  }
};
