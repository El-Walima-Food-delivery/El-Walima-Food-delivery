import axios from "axios";
import { useEffect, useState } from "react";

const ProductsCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categoryItems, setCategoryItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get(
        `http://localhost:3000/api/menu-items/cat/${id}`
      );
      setCategories(res.data);
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = async (category: string) => {
    setSelectedCategory(category);
    const res = await axios.get(
      `http://localhost:3000/api/menu-items/${category}`
    );
    setCategoryItems(res.data);
  };

  return (
    <div>
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => handleCategoryClick(category)}>
            {category}
          </li>
        ))}
      </ul>
      {selectedCategory && (
        <div>
          <h2>{selectedCategory} Items</h2>
          <ul>
            {categoryItems.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductsCategories;
