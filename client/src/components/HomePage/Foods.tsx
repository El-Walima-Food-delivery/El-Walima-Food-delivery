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
    }, 1000);
  }, []);

  const handleMenuTabs = (type: string): void => {
    setMenuTab(type);
  };

  return (
    <section className="my-12 max-w-screen-xl mx-auto px-6">
      <div className="flex items-center justify-center space-x-6">
        {["Breakfast", "Lunch", "Dinner"].map((meal) => (
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {foods.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-102"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.name}
              </h3>
              <button className="mt-2 px-4 py-2 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-full font-medium transition-all duration-300 hover:from-orange-500 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50">
                hello
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Foods;
