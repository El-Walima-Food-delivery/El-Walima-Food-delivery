import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DeliveryMap from "../components/DeliveryMap";
import io from "socket.io-client";

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
}

const DeliveryTracking: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [deliveryStatus, setDeliveryStatus] = useState<DeliveryStatus | null>(
    null
  );

  useEffect(() => {
    const fetchDeliveryStatus = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/orders/delivery-status/${orderId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data, "delivery status");
        setDeliveryStatus(response.data);
      } catch (error) {
        console.error("Error fetching delivery status:", error);
      }
    };

    fetchDeliveryStatus();

    const socket = io("http://localhost:3000");
    socket.on(
      `deliveryUpdate-${orderId}`,
      (data: { latitude: number; longitude: number }) => {
        setDeliveryStatus((prevStatus) => {
          if (!prevStatus) return null;
          return {
            ...prevStatus,
            current_location: {
              type: "Point",
              coordinates: [data.longitude, data.latitude],
            },
          };
        });
      }
    );

    socket.on(`orderStatus-${orderId}`, (data: { status: string }) => {
      setDeliveryStatus((prevStatus) => {
        if (!prevStatus) return null;
        return {
          ...prevStatus,
          Order: {
            ...prevStatus.Order,
            status: data.status,
          },
        };
      });
    });

    return () => {
      socket.disconnect();
    };
  }, [orderId]);

  if (!deliveryStatus) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Delivery Tracking</h1>
      <p className="mb-2">Order ID: {orderId}</p>
      <p className="mb-2">Status: {deliveryStatus.Order.status}</p>
      <p className="mb-2">Driver: {deliveryStatus.driver.name}</p>
      <p className="mb-4">Driver Email: {deliveryStatus.driver.email}</p>
      {/* {deliveryStatus.Order.status === "on_the_way" && (

      )} */}
      <DeliveryMap
        orderId={orderId!}
        initialLocation={{
          lat: deliveryStatus.current_location.coordinates[1],
          lng: deliveryStatus.current_location.coordinates[0],
        }}
      />
    </div>
  );
};

export default DeliveryTracking;
