import React, { useEffect, useRef, useState } from "react";

interface Restaurant {
  id: string;
  name: string;
  email: string;
  imagesUrl: string;
  location: string;
}

const RestaurantList: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/users/owner/restaurants"
      );
      const data = await response.json();
      if (Array.isArray(data)) {
        setRestaurants(data);
      } else {
        setError("Received invalid data format");
      }
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setError("Failed to fetch restaurants");
    } finally {
      setLoading(false);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  if (loading) {
    return <div>Loading restaurants...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="my-12 max-w-screen-xl mx-auto px-6">
      {/* Restaurant Header */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
        <div className="lg:w-2/3">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Our Partner Restaurants
          </h1>
          <p className="text-lg text-gray-700">
            We partner with leading restaurants to offer you a variety of
            delicious dishes. Check out our partner restaurants and enjoy meals
            made from the freshest ingredients.
          </p>
        </div>
        <img
          src="https://th.bing.com/th/id/OIP.LAKlyp7D03xGufDu_LE6mAHaE8?rs=1&pid=ImgDetMain"
          alt="Restaurant"
          className="w-full lg:w-1/3 h-64 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Restaurants List with Scrollable Feature */}
      <h2 className="text-2xl font-semibold mb-6">Our Partners</h2>
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          &larr;
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll space-x-6 p-2 scroll-smooth"
        >
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white shadow-md rounded-lg overflow-hidden min-w-[250px] flex-shrink-0 transition-all duration-300 hover:shadow-lg hover:scale-102 cursor-pointer"
            >
              <img
                src={restaurant.imagesUrl}
                alt={restaurant.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-1 truncate">
                  {restaurant.name}
                </h3>
                <p className="text-sm text-gray-600">{restaurant.email}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default RestaurantList;
