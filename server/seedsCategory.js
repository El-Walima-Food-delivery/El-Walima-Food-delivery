const db = require("./models/index");
const categories = [
  {
    id: 1,
    name: "Pizza",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
  },
  {
    id: 2,
    name: "Burger",
    imageUrl:
      "https://www.gardengourmet.be/sites/default/files/recipes/aeead5804e79ff6fb98b2039619c5230_200828_MEDIAMONKS_GG_Spicytarian.jpg",
  },
  {
    id: 3,
    name: "Tunisian",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFFo-4-UIFCKu_-q67sBxM6gD0jup6PL1Cg&s",
  },
  {
    id: 4,
    name: "Salad",
    imageUrl:
      "https://www.foodandwine.com/thmb/IuZPWAXBp4YaT9hn1YLHhuijT3k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-big-italian-salad-hero-83e6ea846722478f8feb1eea33158b00.jpg",
  },
  {
    id: 5,
    name: "Desserts",
    imageUrl:
      "https://creationhloua.com/wp-content/uploads/2023/04/dessert-turc-magnolia-le-resultat-final.jpeg",
  },
  {
    id: 6,
    name: "Pasta",
    imageUrl:
      "https://www.allrecipes.com/thmb/5SdUVhHTMs-rta5sOblJESXThEE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11691-tomato-and-garlic-pasta-ddmfs-3x4-1-bf607984a23541f4ad936b33b22c9074.jpg",
  },
  {
    id: 7,
    name: "Chicken",
    imageUrl:
      "https://cdn.pratico-pratiques.com/app/uploads/sites/2/2018/08/27235233/poulet-frit-style-kentucky.jpeg",
  },
  {
    id: 8,
    name: "Sandwich",
    imageUrl:
      "https://www.fleurymichon.fr/sites/default/files/styles/information_card_desktop/public/telechargements/images/galerie/2024-03/30012024-9K2A6578-Modifier-Modifier.jpg.webp?itok=tpceW947",
  },
];
db.Category.bulkCreate(categories)
  .then(() => {
    console.log("Categories seeded successfully");
  })
  .catch((error) => {
    console.error("Error seeding categories:", error);
  });
