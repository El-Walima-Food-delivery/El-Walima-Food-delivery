import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";
import useSocket from "../hooks/useSocket";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN as string;

mapboxgl.setRTLTextPlugin(
  "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.3.0/mapbox-gl-rtl-text.js",
  null,
  true
);

// Add this import at the top of your file
import deliveryIcon from "../assets/delivery.png";

interface DeliveryMapProps {
  orderId: string;
  initialDriverLocation: { lat: number; lng: number };
  clientLocation: { lat: number; lng: number };
  isDriver: boolean;
}

const DeliveryMap: React.FC<DeliveryMapProps> = ({
  orderId,
  initialDriverLocation,
  clientLocation,
  isDriver,
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const driverMarker = useRef<mapboxgl.Marker | null>(null);
  const [driverLocation, setDriverLocation] = useState<[number, number]>([
    initialDriverLocation.lng,
    initialDriverLocation.lat,
  ]);

  const socket = useSocket("http://localhost:3000");

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [initialDriverLocation.lng, initialDriverLocation.lat],
      zoom: 12,
    });

    // Replace the existing addDeliveryGuy function with this updated version
    const addDeliveryGuy = (map: mapboxgl.Map) => {
      const el = document.createElement("div");
      el.className = "delivery-guy-marker";

      // Create an image element and set its source to the new icon
      const img = document.createElement("img");
      img.src = deliveryIcon;
      img.style.width = "40px"; // Adjust size as needed
      img.style.height = "40px"; // Adjust size as needed
      el.appendChild(img);

      new mapboxgl.Marker(el)
        .setLngLat([initialDriverLocation.lng, initialDriverLocation.lat])
        .addTo(map);
    };

    addDeliveryGuy(map.current!);

    new mapboxgl.Marker({ color: "#F44336" })
      .setLngLat([clientLocation.lng, clientLocation.lat])
      .addTo(map.current);

    const bounds = new mapboxgl.LngLatBounds()
      .extend([initialDriverLocation.lng, initialDriverLocation.lat])
      .extend([clientLocation.lng, clientLocation.lat]);

    map.current.fitBounds(bounds, { padding: 50 });

    const event = `deliveryUpdate-${orderId}`;
    const handleLocationUpdate = (data: {
      latitude: number;
      longitude: number;
    }) => {
      if (data.latitude && data.longitude) {
        setDriverLocation([data.longitude, data.latitude]);
        if (!isDriver) {
          fetchRoute(
            [data.longitude, data.latitude],
            [clientLocation.lng, clientLocation.lat]
          );
        }
      }
    };

    socket?.on(event, handleLocationUpdate);

    fetchRoute(
      [initialDriverLocation.lng, initialDriverLocation.lat],
      [clientLocation.lng, clientLocation.lat]
    );

    return () => {
      socket?.off(event, handleLocationUpdate);
      socket?.disconnect();
    };
  }, [orderId, initialDriverLocation, clientLocation, isDriver, socket]);

  useEffect(() => {
    if (driverMarker.current) {
      driverMarker.current.setLngLat(driverLocation);
    }
    if (map.current) {
      map.current.panTo(driverLocation);
    }
  }, [driverLocation]);

  const fetchRoute = async (start: [number, number], end: [number, number]) => {
    try {
      const response = await axios.get(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`
      );
      const route = response.data.routes[0].geometry.coordinates;

      if (map.current) {
        map.current.on("load", () => {
          if (map.current!.getSource("route")) {
            (map.current!.getSource("route") as mapboxgl.GeoJSONSource).setData(
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "LineString",
                  coordinates: route,
                },
              }
            );
          } else {
            map.current!.addLayer({
              id: "route",
              type: "line",
              source: {
                type: "geojson",
                data: {
                  type: "Feature",
                  properties: {},
                  geometry: {
                    type: "LineString",
                    coordinates: route,
                  },
                },
              },
              layout: {
                "line-join": "round",
                "line-cap": "round",
              },
              paint: {
                "line-color": "#3887be",
                "line-width": 5,
                "line-opacity": 0.75,
              },
            });
          }
        });
      }
    } catch (error) {
      console.error("Error fetching route:", error);
    }
  };

  return <div ref={mapContainer} style={{ width: "100%", height: "400px" }} />;
};

export default DeliveryMap;
