import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DeliveryMap from "../components/DeliveryMap";

interface DeliveryStatus {
  id: number;
  status: string;
  current_location: {
    type: string;
    coordinates: [number, number];
  };
  driver: {
    name: string;
    phone: string;
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
          `http://localhost:3000/api/orders/delivery-status/${orderId}`
        );
        setDeliveryStatus(response.data);
      } catch (error) {
        console.error("Error fetching delivery status:", error);
      }
    };

    fetchDeliveryStatus();
    const intervalId = setInterval(fetchDeliveryStatus, 30000); // Update every 30 seconds

    return () => clearInterval(intervalId);
  }, [orderId]);

  if (!deliveryStatus) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Delivery Tracking</h1>
      <p>Order ID: {orderId}</p>
      <p>Status: {deliveryStatus.status}</p>
      <p>Driver: {deliveryStatus.driver.name}</p>
      <p>Driver Phone: {deliveryStatus.driver.phone}</p>
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
