import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import io from "socket.io-client";

interface DeliveryMapProps {
  orderId: string;
  initialLocation: { lat: number; lng: number };
}

const containerStyle = {
  width: "100%",
  height: "400px",
};

const DeliveryMap: React.FC<DeliveryMapProps> = ({
  orderId,
  initialLocation,
}) => {
  const [deliveryLocation, setDeliveryLocation] = useState(initialLocation);

  useEffect(() => {
    const socket = io("http://localhost:3000");

    socket.on(
      `deliveryUpdate-${orderId}`,
      (data: { latitude: number; longitude: number }) => {
        setDeliveryLocation({ lat: data.latitude, lng: data.longitude });
      }
    );

    return () => {
      socket.disconnect();
    };
  }, [orderId]);

  return (
    <LoadScript googleMapsApiKey="Api key ">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={deliveryLocation}
        zoom={15}
      >
        <Marker position={deliveryLocation} />
      </GoogleMap>
    </LoadScript>
  );
};

export default DeliveryMap;
