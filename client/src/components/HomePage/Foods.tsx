import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface FoodItem {
  id: number;
  name: string;
  imageUrl: string;
}

interface MenuItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

const Foods: React.FC = () => {
  const [categories, setCategories] = useState<FoodItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleCategoryClick = (id: number) => {
    setSelectedCategory(id);
    fetch(`http://localhost:3000/api/menu-items/cat/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.map((item: MenuItem) => ({
          ...item,
          price:
            typeof item.price === "number"
              ? item.price
              : parseFloat(item.price) || 0,
        }));
        setMenuItems(formattedData);
      });
  };

  const handleItemClick = (itemId: number) => {
    navigate(`/OneItemdetail/${itemId}`);
  };

  return (
    <section className="my-12 max-w-screen-xl mx-auto px-6">
      <h2 className="text-2xl font-semibold mb-6">Categories</h2>
      <div className="relative">
        <div className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-102 snap-start min-w-[150px] mx-2 cursor-pointer ${
                selectedCategory === category.id ? "ring-2 ring-primary" : ""
              }`}
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-800 mb-1 truncate">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation Arrows */}
        <button
          onClick={() => {
            const scrollContainer = document.querySelector(".flex");
            scrollContainer?.scrollBy({ left: -200, behavior: "smooth" });
          }}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          &lt;
        </button>
        <button
          onClick={() => {
            const scrollContainer = document.querySelector(".flex");
            scrollContainer?.scrollBy({ left: 200, behavior: "smooth" });
          }}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          &gt;
        </button>
      </div>

      {selectedCategory && (
        <>
          <h2 className="text-2xl font-semibold mb-6">Menu Items</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {menuItems.map((item) => (
              <div
                onClick={() => handleItemClick(item.id)}
                key={item.id}
                className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-102"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1 truncate">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    $
                    {typeof item.price === "number"
                      ? item.price.toFixed(2)
                      : "N/A"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Foods;
