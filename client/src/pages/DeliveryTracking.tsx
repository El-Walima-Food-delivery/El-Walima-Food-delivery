import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DeliveryMap from "../components/DeliveryMap";
import useSocket from "../hooks/useSocket";

interface DeliveryStatus {
  id: number;
  status: string;
  current_location: {
    type: string;
    coordinates: [number, number];
  };
  driver: {
    name: string;
    email: string;
  };
  Order: {
    status: string;
  };
  client_location: {
    type: string;
    coordinates: [number, number];
  };
}

const DeliveryTracking: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [deliveryStatus, setDeliveryStatus] = useState<DeliveryStatus | null>(
    null
  );
  const socket = useSocket("http://localhost:3000");

  const fetchDeliveryStatus = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/orders/delivery-status/${orderId}`
      );
      setDeliveryStatus(response.data);
    } catch (error) {
      console.error("Error fetching delivery status:", error);
    }
  }, [orderId]);

  useEffect(() => {
    fetchDeliveryStatus();
    const intervalId = setInterval(fetchDeliveryStatus, 30000);

    return () => clearInterval(intervalId);
  }, [fetchDeliveryStatus]);

  useEffect(() => {
    if (!socket) return;

    const event = `deliveryUpdate-${orderId}`;
    const handleLocationUpdate = (data: {
      latitude: number;
      longitude: number;
    }) => {
      setDeliveryStatus((prevStatus) => {
        if (prevStatus) {
          return {
            ...prevStatus,
            current_location: {
              type: "Point",
              coordinates: [data.longitude, data.latitude],
            },
          };
        }
        return prevStatus;
      });
    };

    socket.on(event, handleLocationUpdate);

    return () => {
      socket.off(event, handleLocationUpdate);
      socket.disconnect();
    };
  }, [orderId, socket]);

  if (!deliveryStatus) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-2xl font-semibold text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-primary text-white px-6 py-4">
          <h1 className="text-3xl font-bold">Delivery Tracking</h1>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-gray-600">Order ID:</p>
              <p className="text-xl font-semibold">{orderId}</p>
            </div>
            <div>
              <p className="text-gray-600">Status:</p>
              <p className="text-xl font-semibold">
                {deliveryStatus.Order.status}
              </p>
            </div>
            <div>
              <p className="text-gray-600">Driver:</p>
              <p className="text-xl font-semibold">
                {deliveryStatus.driver.name}
              </p>
            </div>
            <div>
              <p className="text-gray-600">Driver Email:</p>
              <p className="text-xl font-semibold">
                {deliveryStatus.driver.email}
              </p>
            </div>
          </div>
          {deliveryStatus.Order.status === "on_the_way" && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-4">Live Tracking</h2>
              <div className="h-96 rounded-lg overflow-hidden">
                <DeliveryMap
                  orderId={orderId!}
                  initialDriverLocation={{
                    lat: deliveryStatus.current_location.coordinates[1],
                    lng: deliveryStatus.current_location.coordinates[0],
                  }}
                  clientLocation={{
                    lat: deliveryStatus.client_location.coordinates[1],
                    lng: deliveryStatus.client_location.coordinates[0],
                  }}
                  isDriver={false}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeliveryTracking;
