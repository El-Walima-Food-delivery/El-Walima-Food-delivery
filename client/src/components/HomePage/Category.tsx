import { useState } from "react";

const Category = () => {
  const categories = [
    "Bakery",
    "Burger",
    "Beverage",
    "Chicken",
    "Pizza",
    "Seafood",
  ];

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (Category: string) => {
    setSelectedCategory(Category);
  };
  return (
    <div>
      <h2>Category</h2>
      <ul>
        {categories.map((category) => (
          <li key={category} onClick={() => handleCategoryClick(category)}>
            {category}
          </li>
        ))}
      </ul>
      <div>
        <h3> {selectedCategory}</h3>
      </div>
    </div>
  );
};
export default Category;
