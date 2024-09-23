import React, { useState, useEffect } from "react";
import axios from "axios";

import io from "socket.io-client";
import "leaflet/dist/leaflet.css";
import DeliveryMap from "../components/DeliveryMap";

const DeliveryInterface: React.FC = () => {
  const [deliveryId, setDeliveryId] = useState<string>("");
  const [orderId, setOrderId] = useState<string>("");
  const [currentLocation, setCurrentLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [orderStatus, setOrderStatus] = useState<string>("pending");
  const [clientLocation, setClientLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const socket = io("http://localhost:3000");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          console.log(position, "position here ");
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => console.error("Error getting location:", error),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    }
  }, []);

  useEffect(() => {
    if (currentLocation && orderId) {
      updateDeliveryLocation();
    }
  }, [currentLocation, orderId]);

  const updateDeliveryLocation = async () => {
    console.log("Updating delivery location", currentLocation);
    try {
      await axios.post(
        "http://localhost:3000/api/orders/update-location",
        {
          deliveryId,
          orderId,
          latitude: currentLocation!.lat,
          longitude: currentLocation!.lng,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("Location update sent to server:", currentLocation);

      socket.emit("updateDeliveryLocation", {
        orderId,
        location: currentLocation,
      });
    } catch (error) {
      console.error("Error updating location:", error);
    }
  };

  const updateOrderStatus = async (newStatus: string) => {
    try {
      await axios.post(
        "http://localhost:3000/api/orders/delivery/update-status",
        {
          orderId,
          status: newStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setOrderStatus(newStatus);
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const fetchOrderDetails = async () => {
    try {
      console.log("Fetching order details for orderId:", orderId); // Check if function is called
      const response = await axios.get(
        `http://localhost:3000/api/orders/delivery-status/${orderId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data, "response.data wiiiiiiiiiiiiiiw"); // Check the API response
      setOrderStatus(response.data.Order.status);
      setClientLocation({
        lat: response.data.client_location.coordinates[1],
        lng: response.data.client_location.coordinates[0],
      });
    } catch (error) {
      console.log(error, "error wiiiiiiiiiiiiiiw");
      console.error("Error fetching order details:", error);
    }
  };

  useEffect(() => {
    if (orderId) {
      console.log("Order ID is set:", orderId); // Check if orderId is set
      fetchOrderDetails();
    }
  }, [orderId]);
  console.log(clientLocation, "clientLocation");
  console.log(currentLocation, "currentLocation");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Delivery Interface</h1>
      <input
        type="text"
        placeholder="Enter Delivery ID"
        value={deliveryId}
        onChange={(e) => setDeliveryId(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Enter Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      <div className="mb-4">
        <button
          onClick={() => updateOrderStatus("preparing")}
          className="mr-2 p-2 bg-blue-500 text-white rounded"
        >
          Start Preparing
        </button>
        <button
          onClick={() => updateOrderStatus("on_the_way")}
          className="mr-2 p-2 bg-green-500 text-white rounded"
        >
          Start Delivery
        </button>
        <button
          onClick={() => updateOrderStatus("delivered")}
          className="p-2 bg-purple-500 text-white rounded"
        >
          Mark as Delivered
        </button>
      </div>
      {currentLocation && clientLocation && (
        <DeliveryMap
          orderId={orderId}
          initialDriverLocation={currentLocation}
          clientLocation={clientLocation}
        />
      )}
    </div>
  );
};

export default DeliveryInterface;