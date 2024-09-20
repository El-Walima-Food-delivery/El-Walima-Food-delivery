import axios from "axios";
import { useEffect, useState } from "react";
const ProductsCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get(
        `http://localhost:3000/api/menu-items/cat/${id}`
      );
      setCategories(res.data);
    };
    fetchCategories();
  }, []);
  return (
    <div>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsCategories;
