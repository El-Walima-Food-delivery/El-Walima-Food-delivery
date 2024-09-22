import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import io from "socket.io-client";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import axios from "axios";

interface DeliveryMapProps {
  orderId: string;
  initialDriverLocation: { lat: number; lng: number };
  clientLocation: { lat: number; lng: number };
}

const containerStyle = {
  width: "100%",
  height: "400px",
};

// Fix for default marker icon
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

function LocationMarker({
  position,
  isDriver,
}: {
  position: L.LatLngExpression;
  isDriver: boolean;
}) {
  const map = useMap();
  useEffect(() => {
    if (position && Array.isArray(position) && position.length === 2) {
      map.flyTo(position, map.getZoom());
    }
  }, [position, map]);

  const markerIcon = isDriver
    ? new L.Icon({
        iconUrl:
          "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      })
    : new L.Icon({
        iconUrl:
          "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });

  return position && Array.isArray(position) && position.length === 2 ? (
    <Marker position={position} icon={markerIcon} />
  ) : null;
}

const DeliveryMap: React.FC<DeliveryMapProps> = ({
  orderId,
  initialDriverLocation,
  clientLocation,
}) => {
  const [driverLocation, setDriverLocation] = useState<[number, number]>([
    initialDriverLocation.lat,
    initialDriverLocation.lng,
  ]);
  const [routeCoordinates, setRouteCoordinates] = useState<[number, number][]>(
    []
  );

  useEffect(() => {
    const socket = io("http://localhost:3000");

    socket.on(
      `deliveryUpdate-${orderId}`,
      (data: { latitude: number; longitude: number }) => {
        if (data.latitude && data.longitude) {
          setDriverLocation([data.latitude, data.longitude]);
          fetchRoute(
            [data.latitude, data.longitude],
            [clientLocation.lat, clientLocation.lng]
          );
        }
      }
    );

    return () => {
      socket.disconnect();
    };
  }, [orderId, clientLocation]);

  const fetchRoute = async (start: [number, number], end: [number, number]) => {
    try {
      const response = await axios.get(
        `http://router.project-osrm.org/route/v1/driving/${start[1]},${start[0]};${end[1]},${end[0]}?overview=full&geometries=geojson`
      );
      const coordinates = response.data.routes[0].geometry.coordinates.map(
        (coord: [number, number]) => [coord[1], coord[0]]
      );
      setRouteCoordinates(coordinates);
    } catch (error) {
      console.error("Error fetching route:", error);
    }
  };

  useEffect(() => {
    fetchRoute(driverLocation, [clientLocation.lat, clientLocation.lng]);
  }, []);

  const bounds = L.latLngBounds([
    driverLocation,
    [clientLocation.lat, clientLocation.lng],
  ]);

  return (
    <MapContainer bounds={bounds} style={containerStyle}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker position={driverLocation} isDriver={true} />
      <LocationMarker
        position={[clientLocation.lat, clientLocation.lng]}
        isDriver={false}
      />
      <Polyline positions={routeCoordinates} color="blue" />
    </MapContainer>
  );
};

export default DeliveryMap;
