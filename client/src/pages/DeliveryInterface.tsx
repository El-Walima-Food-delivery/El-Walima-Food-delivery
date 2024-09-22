import React, { useState, useEffect } from "react";
import axios from "axios";

import io from "socket.io-client";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const DeliveryInterface: React.FC = () => {
  const [deliveryId, setDeliveryId] = useState<string>("");
  const [orderId, setOrderId] = useState<string>("");
  const [currentLocation, setCurrentLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [orderStatus, setOrderStatus] = useState<string>("pending");

  const socket = io("http://localhost:3000");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
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
      {currentLocation && (
        <MapContainer
          center={[currentLocation.lat, currentLocation.lng]}
          zoom={15}
          style={{ width: "100%", height: "400px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[currentLocation.lat, currentLocation.lng]} />
        </MapContainer>
      )}
    </div>
  );
};

export default DeliveryInterface;
