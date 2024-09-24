import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";

import LocationPrompt from "../LocationPrompt";
import { FaSearch } from "react-icons/fa";
import { searchProductsAndRestaurants } from "../../redux/features/searchSlice";
const Banner: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const user = useSelector((state: RootState) => state.users.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (user && user.location) {
      setShowSearch(true);
    }
  }, [user]);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      dispatch(searchProductsAndRestaurants(searchTerm));
    }
  };

  return (
    <section className="header-banner h-screen w-full bg-cover bg-center flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 shadow-text">
          Delicious Food, Delivered to You
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 shadow-text">
          Discover the best restaurants in your area
        </p>
        <div className="max-w-xl mx-auto">
          {showSearch ? (
            <div className="bg-white rounded-full p-1 flex items-center">
              <input
                type="text"
                className="flex-grow px-6 py-3 rounded-full focus:outline-none"
                placeholder="Search for food or restaurants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
              <button
                className="bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition duration-300"
                onClick={handleSearch}
              >
                <FaSearch className="text-xl" />
              </button>
            </div>
          ) : (
            <LocationPrompt onLocationSet={() => setShowSearch(true)} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;
