import React, { useEffect, useState } from "react";

interface FoodItem {
  id: number;
  name: string;
  imageUrl: string;
  // Add other properties as needed
}

const Foods: React.FC = () => {
  const [menuTab, setMenuTab] = useState<string>("Breakfast");
  const [loading, setLoading] = useState<boolean>(false);

  const useFetch = (): FoodItem[] => {
    const [foods, setFoods] = useState<FoodItem[]>([]);

    useEffect(() => {
      fetch("http://localhost:3000/api/categories/")
        .then((res) => res.json())
        .then((data) => setFoods(data));
    }, []);
    return foods;
  };
  const foods = useFetch();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 99999999999);
  }, []);

  const handleMenuTabs = (type: string): void => {
    setMenuTab(type);
  };

  console.log(foods);

  return (
    <section className="my-12 max-w-screen-xl mx-auto px-6">
      <div className="flex items-center justify-center space-x-6">
        {["Top Categories"].map((meal) => (
          <p
            key={meal}
            className={
              menuTab === meal
                ? "active_menu_tab poppins bg-primary"
                : "menu_tab poppins"
            }
            onClick={() => handleMenuTabs(meal)}
          >
            {meal}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {foods.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-sm rounded-md overflow-hidden transition-all duration-300 hover:shadow-md hover:scale-105"
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
              <div className="relative">
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-red-500 overflow-x-scroll">
                  <div className="w-[200%] h-full"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Foods;
