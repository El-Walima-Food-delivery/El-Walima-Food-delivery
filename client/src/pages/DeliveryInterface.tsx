import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const DeliveryInterface: React.FC = () => {
  const [deliveryId, setDeliveryId] = useState<string>("");
  const [currentLocation, setCurrentLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

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
    if (currentLocation && deliveryId) {
      updateDeliveryLocation();
    }
  }, [currentLocation, deliveryId]);

  const updateDeliveryLocation = async () => {
    try {
      await axios.post("http://localhost:3000/api/orders/update-location", {
        deliveryId,
        latitude: currentLocation!.lat,
        longitude: currentLocation!.lng,
      });
    } catch (error) {
      console.error("Error updating location:", error);
    }
  };

  return (
    <div>
      <h1>Delivery Interface</h1>
      <input
        type="text"
        placeholder="Enter Delivery ID"
        value={deliveryId}
        onChange={(e) => setDeliveryId(e.target.value)}
      />
      {currentLocation && (
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "400px" }}
            center={currentLocation}
            zoom={15}
          >
            <Marker position={currentLocation} />
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
};

export default DeliveryInterface;
