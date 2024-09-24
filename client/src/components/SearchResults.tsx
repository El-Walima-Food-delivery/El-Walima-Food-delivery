import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";
import { FaUtensils, FaStore } from "react-icons/fa";
import axios from "axios";

const SearchResults: React.FC = () => {
  const { results, loading, error } = useSelector(
    (state: RootState) => state.search
  );

  const [addresses, setAddresses] = useState<{ [key: string]: string }>({});

  const [menuItemsPage, setMenuItemsPage] = useState(1);
  const [restaurantsPage, setRestaurantsPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    if (results.restaurants) {
      results.restaurants.forEach((restaurant) => {
        if (
          restaurant.location &&
          Array.isArray(restaurant.location.coordinates)
        ) {
          getAddressFromCoordinates(
            restaurant.location.coordinates[0],
            restaurant.location.coordinates[1]
          ).then((address) => {
            setAddresses((prev) => ({ ...prev, [restaurant.id]: address }));
          });
        }
      });
    }
  }, [results.restaurants]);

  const getAddressFromCoordinates = async (lng: number, lat: number) => {
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${
          import.meta.env.VITE_MAPBOX_TOKEN
        }`
      );
      return response.data.features[0].place_name;
    } catch (error) {
      console.error("Error fetching address:", error);
      return "Address not available";
    }
  };

  if (loading)
    return <div className="text-center py-8 text-2xl">Loading...</div>;
  if (error)
    return (
      <div className="text-center py-8 text-2xl text-red-500">
        Error: {error}
      </div>
    );

  const hasMenuItems = results.menuItems && results.menuItems.length > 0;
  const hasRestaurants = results.restaurants && results.restaurants.length > 0;

  const paginate = (items: any[], page: number) => {
    const indexOfLastItem = page * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return items.slice(indexOfFirstItem, indexOfLastItem);
  };

  return (
    <div className="container mx-auto px-4 py-12 bg-gray-100">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Search Results
      </h2>
      {!hasMenuItems && !hasRestaurants && (
        <p className="text-center text-xl text-gray-600">
          No results found. Try a different search term.
        </p>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {hasMenuItems && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 flex items-center text-orange-600">
              <FaUtensils className="mr-2" /> Menu Items
            </h3>
            <ul className="space-y-4">
              {paginate(results.menuItems, menuItemsPage).map((item) => (
                <li
                  key={item.id}
                  className="border-b border-gray-200 pb-4 last:border-b-0"
                >
                  <Link
                    to={`/OneItemdetail/${item.id}`}
                    className="flex items-center hover:bg-orange-50 transition duration-300 rounded-lg p-2"
                  >
                    <img
                      src={item.imageUrl || "https://via.placeholder.com/100"}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg mr-4"
                    />
                    <div>
                      <h4 className="font-medium text-lg text-gray-800">
                        {item.name}
                      </h4>
                      <p className="text-orange-600 font-bold">
                        ${Number(item.price).toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-600">
                        {item.User?.name || "Unknown Restaurant"}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-center">
              <button
                onClick={() =>
                  setMenuItemsPage((prev) => Math.max(prev - 1, 1))
                }
                disabled={menuItemsPage === 1}
                className="mx-2 px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => setMenuItemsPage((prev) => prev + 1)}
                disabled={
                  menuItemsPage * itemsPerPage >= results.menuItems.length
                }
                className="mx-2 px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {hasRestaurants && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 flex items-center text-green-600">
              <FaStore className="mr-2" /> Restaurants
            </h3>
            <ul className="space-y-4">
              {paginate(results.restaurants, restaurantsPage).map(
                (restaurant) => (
                  <li
                    key={restaurant.id}
                    className="border-b border-gray-200 pb-4 last:border-b-0"
                  >
                    <div className="flex items-center hover:bg-green-50 transition duration-300 rounded-lg p-2">
                      <img
                        src={
                          restaurant.imagesUrl ||
                          "https://via.placeholder.com/100"
                        }
                        alt={restaurant.name}
                        className="w-20 h-20 object-cover rounded-lg mr-4"
                      />
                      <div>
                        <h4 className="font-medium text-lg text-gray-800">
                          {restaurant.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {restaurant.email}
                        </p>
                        <p className="text-sm text-gray-600">
                          {addresses[restaurant.id] || "Fetching address..."}
                        </p>
                      </div>
                    </div>
                  </li>
                )
              )}
            </ul>
            <div className="mt-4 flex justify-center">
              <button
                onClick={() =>
                  setRestaurantsPage((prev) => Math.max(prev - 1, 1))
                }
                disabled={restaurantsPage === 1}
                className="mx-2 px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => setRestaurantsPage((prev) => prev + 1)}
                disabled={
                  restaurantsPage * itemsPerPage >= results.restaurants.length
                }
                className="mx-2 px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
