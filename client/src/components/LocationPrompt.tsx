import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserLocation } from "../redux/features/authSlice";
import { AppDispatch } from "../redux/store";

const LocationPrompt: React.FC = () => {
  const [address, setAddress] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleUseCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(updateUserLocation([longitude, latitude]));
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically geocode the address to get coordinates
    console.log("Address submitted:", address);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-full p-1 box-border bg-white overflow-hidden ring-red-300 focus-within:ring-4 w-full flex items-center"
    >
      <input
        type="text"
        placeholder="Enter your address"
        value={address}
        onChange={handleAddressChange}
        className="rounded-full px-4 py-2 focus:outline-none w-full bg-transparent"
      />
      <button
        type="button"
        onClick={handleUseCurrentLocation}
        className="text-sm bg-primary py-2 px-4 rounded-full text-white poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform"
      >
        Use current location
      </button>
    </form>
  );
};

export default LocationPrompt;
