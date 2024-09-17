const dishes = [
  {
    imageUrl:
      "clientsrcimages\fresh-tasty-burger-2021-08-29-04-51-34-utc 1.png",
    name: "Fish Burger",
    price: 5.59,
  },
  { name: "Beef Burger", price: 5.59 },
  { name: "Cheese Burger", price: 5.59 },
];

const PopularDishes = () => {
  return (
    <div>
      <h2>Popular Dishes</h2>
      <ul>
        {dishes.map((dish, index) => (
          <li key={index}>
            <div>
              <h3>{dish.name}</h3>
              <p>${dish.price.toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularDishes;
