const db = require("./models/index");
const seedusers = [
  // 10 customers
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    password: "hashed_password_1",
    imagesUrl:
      "https://th.bing.com/th/id/R.5a41e71277fabad4b8a6a0d7508e280c?rik=2njI%2bksMAmbHYw&pid=ImgRaw&r=0",
    balance: 123.45,
    location: {
      type: "Point",
      coordinates: [10.16579, 36.80611], // Tunis
    },
    role: "customer",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "hashed_password_2",
    imagesUrl:
      "https://media.istockphoto.com/id/682897825/fr/photo/confident-businesswoman-over-gray-background.jpg?s=612x612&w=0&k=20&c=OcDGuIswfOhS21Fwg_uxb6O8MXEQK5IrjMqkguihdAk=",
    balance: 234.56,
    location: {
      type: "Point",
      coordinates: [10.102, 35.6781], // Sfax
    },
    role: "customer",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    password: "hashed_password_3",
    imagesUrl:
      "https://media.istockphoto.com/id/1171169099/fr/photo/homme-avec-les-bras-crois%C3%A9s-disolement-sur-le-fond-gris.jpg?s=612x612&w=0&k=20&c=csQeB3utGtrGeb3WmdSxRYXaJvUy_xqlhbOIZxclcGA=",
    balance: 345.67,
    location: {
      type: "Point",
      coordinates: [10.6347, 35.8256], // Monastir
    },
    role: "customer",
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob.brown@example.com",
    password: "hashed_password_4",
    imagesUrl:
      "https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg",
    balance: 456.78,
    location: {
      type: "Point",
      coordinates: [10.6105, 34.7441], // Gabès
    },
    role: "customer",
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    password: "hashed_password_5",
    imagesUrl:
      "https://media.istockphoto.com/id/1386479313/fr/photo/heureuse-femme-daffaires-afro-am%C3%A9ricaine-mill%C3%A9naire-posant-isol%C3%A9e-sur-du-blanc.jpg?s=612x612&w=0&k=20&c=CS0xj40eNCorQyzN1ImeMKlvPDocPHSaMsXethQ-Q_g=",
    balance: 567.89,
    location: {
      type: "Point",
      coordinates: [8.7483, 36.4573], // Tabarka
    },
    role: "customer",
  },
  {
    id: 6,
    name: "Diana Evans",
    email: "diana.evans@example.com",
    password: "hashed_password_6",
    imagesUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKdG3zlo6rsY1oNgUyNAvPLl96-OGHAswLvQ&s",
    balance: 678.9,
    location: {
      type: "Point",
      coordinates: [9.3708, 37.2783], // Bizerte
    },
    role: "customer",
  },
  {
    id: 7,
    name: "Emily Foster",
    email: "emily.foster@example.com",
    password: "hashed_password_7",
    imagesUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Old_woman_in_Kyrgyzstan%2C_2010.jpg/800px-Old_woman_in_Kyrgyzstan%2C_2010.jpg",
    balance: 789.01,
    location: {
      type: "Point",
      coordinates: [9.5369, 35.6769], // Kairouan
    },
    role: "customer",
  },
  {
    id: 8,
    name: "Frank Garcia",
    email: "frank.garcia@example.com",
    password: "hashed_password_8",
    imagesUrl:
      "https://www.le7.info/media/cache/article/uploads/photos/64101bd1e383a.jpeg",
    balance: 890.12,
    location: {
      type: "Point",
      coordinates: [9.4811, 35.5056], // Sbeitla
    },
    role: "customer",
  },
  {
    id: 9,
    name: "Grace Harris",
    email: "grace.harris@example.com",
    password: "hashed_password_9",
    imagesUrl:
      "https://www.le7.info/media/cache/article/uploads/photos/64101bd1e383a.jpeg",
    balance: 901.23,
    location: {
      type: "Point",
      coordinates: [9.7489, 33.5031], // Gafsa
    },
    role: "customer",
  },
  {
    id: 10,
    name: "Hannah Ivers",
    email: "hannah.ivers@example.com",
    password: "hashed_password_10",
    imagesUrl:
      "https://www.soladis.com/wp-content/uploads/2017/06/personne-1-1.png",
    balance: 123.45,
    location: {
      type: "Point",
      coordinates: [10.0971, 33.8815], // Djerba
    },
    role: "customer",
  },

  // 20 restaurant owners
  {
    id: 11,
    name: "Isabella Jones",
    email: "isabella.jones@example.com",
    password: "hashed_password_11",
    imagesUrl:
      "https://www.restoconnection.fr/wp-content/uploads/2015/02/fa%C3%A7ade-restaurant-architecture-sake-manzo-bejing.jpg",
    balance: 234.56,
    location: {
      type: "Point",
      coordinates: [10.0971, 33.8815], // Djerba
    },
    role: "restaurant_owner",
  },
  {
    id: 12,
    name: "Jack King",
    email: "jack.king@example.com",
    password: "hashed_password_12",
    imagesUrl:
      "https://www.createursdinterieur.com/static/4fc8ce556e777abdb2ba81b6a1f4d368/4b190/facade-restaurant-renove-architecte.jpg",
    balance: 345.67,
    location: {
      type: "Point",
      coordinates: [10.6347, 35.8256], // Monastir
    },
    role: "restaurant_owner",
  },
  {
    id: 13,
    name: "Katherine Lee",
    email: "katherine.lee@example.com",
    password: "hashed_password_13",
    imagesUrl:
      "https://th.bing.com/th/id/OIP.64vdVCN6KYVutR1pmeC_PAHaEo?rs=1&pid=ImgDetMain",
    balance: 456.78,
    location: {
      type: "Point",
      coordinates: [9.7489, 33.5031], // Gafsa
    },
    role: "restaurant_owner",
  },
  {
    id: 14,
    name: "Liam Martinez",
    email: "liam.martinez@example.com",
    password: "hashed_password_14",
    imagesUrl:
      "https://i0.wp.com/www.designlike.com/wp-content/uploads/2018/03/restaurant-1948732_1920.jpg",
    balance: 567.89,
    location: {
      type: "Point",
      coordinates: [9.4811, 35.5056], // Sbeitla
    },
    role: "restaurant_owner",
  },
  {
    id: 15,
    name: "Mia Nelson",
    email: "mia.nelson@example.com",
    password: "hashed_password_15",
    imagesUrl:
      "https://s3-media0.fl.yelpcdn.com/bphoto/8V8nuyIYxb8yY_hsaXFdpA/348s.jpg",
    balance: 678.9,
    location: {
      type: "Point",
      coordinates: [10.16579, 36.80611], // Tunis
    },
    role: "restaurant_owner",
  },
  {
    id: 16,
    name: "Noah Ortiz",
    email: "noah.ortiz@example.com",
    password: "hashed_password_16",
    imagesUrl:
      "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?cs=srgb&dl=chairs-coffee-shop-drinking-glasses-67468.jpg&fm=jpg",
    balance: 789.01,
    location: {
      type: "Point",
      coordinates: [9.5369, 35.6769], // Kairouan
    },
    role: "restaurant_owner",
  },
  {
    id: 17,
    name: "Olivia Parker",
    email: "olivia.parker@example.com",
    password: "hashed_password_17",
    imagesUrl:
      "https://www.dining-out.co.za/ftp/gallery/thumbs/10407--39049.jpg",
    balance: 890.12,
    location: {
      type: "Point",
      coordinates: [10.102, 35.6781], // Sfax
    },
    role: "restaurant_owner",
  },
  {
    id: 18,
    name: "Paul Quinn",
    email: "paul.quinn@example.com",
    password: "hashed_password_18",
    imagesUrl:
      "https://whatsyourgusto.com/wp-content/uploads/2023/07/Group-92.jpg",
    balance: 901.23,
    location: {
      type: "Point",
      coordinates: [10.6105, 34.7441], // Gabès
    },
    role: "restaurant_owner",
  },
  {
    id: 19,
    name: "Quincy Robinson",
    email: "quincy.robinson@example.com",
    password: "hashed_password_19",
    imagesUrl:
      "https://www.themds.com/files/global%20brands/global-brands-frye-store-948.jpg",
    balance: 123.45,
    location: {
      type: "Point",
      coordinates: [8.7483, 36.4573], // Tabarka
    },
    role: "restaurant_owner",
  },
  {
    id: 20,
    name: "Rachel Scott",
    email: "rachel.scott@example.com",
    password: "hashed_password_20",
    imagesUrl:
      "https://static.wixstatic.com/media/908874_b01c804ba8f742a6a63f2e3b46127b16~mv2.jpg/v1/fill/w_849,h_477,q_90/908874_b01c804ba8f742a6a63f2e3b46127b16~mv2.jpg",
    balance: 234.56,
    location: {
      type: "Point",
      coordinates: [9.3708, 37.2783], // Bizerte
    },
    role: "restaurant_owner",
  },
  {
    id: 21,
    name: "Sam Taylor",
    email: "sam.taylor@example.com",
    password: "hashed_password_21",
    imagesUrl:
      "https://cdn.australia247.info/assets/uploads/6fc7e2b8df02ccb1ca7d9b9557ac0041_-queensland-moreton-bay-region-redcliffe-the-oasis-cafe-07-3283-1677html.jpg",
    balance: 345.67,
    location: {
      type: "Point",
      coordinates: [9.7489, 33.5031], // Gafsa
    },
    role: "restaurant_owner",
  },
  {
    id: 22,
    name: "Tina Underwood",
    email: "tina.underwood@example.com",
    password: "hashed_password_22",
    imagesUrl:
      "https://i.pinimg.com/originals/14/d9/8c/14d98c9abca9667bf51cc571160598d0.jpg",
    balance: 456.78,
    location: {
      type: "Point",
      coordinates: [9.4811, 35.5056], // Sbeitla
    },
    role: "restaurant_owner",
  },
  {
    id: 23,
    name: "Uma Vaughn",
    email: "uma.vaughn@example.com",
    password: "hashed_password_23",
    imagesUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/0b/22/45/43/facade-du-restaurant.jpg",
    balance: 567.89,
    location: {
      type: "Point",
      coordinates: [9.5369, 35.6769], // Kairouan
    },
    role: "restaurant_owner",
  },
  {
    id: 24,
    name: "Victor White",
    email: "victor.white@example.com",
    password: "hashed_password_24",
    imagesUrl:
      "https://cdn.almostlanding-bali.com/wp-content/uploads/2019/12/clay-craft-pottery-class.jpg",
    balance: 678.9,
    location: {
      type: "Point",
      coordinates: [10.16579, 36.80611], // Tunis
    },
    role: "restaurant_owner",
  },
  {
    id: 25,
    name: "Wendy Xavier",
    email: "wendy.xavier@example.com",
    password: "hashed_password_25",
    imagesUrl: "https://dbbullseye.com/wp-content/uploads/2022/11/download.jpg",
    balance: 789.01,
    location: {
      type: "Point",
      coordinates: [10.102, 35.6781], // Sfax
    },
    role: "restaurant_owner",
  },
  {
    id: 26,
    name: "Xander Young",
    email: "xander.young@example.com",
    password: "hashed_password_26",
    imagesUrl:
      "https://i0.wp.com/www.designlike.com/wp-content/uploads/2018/03/restaurant-1948732_1920.jpg",
    balance: 890.12,
    location: {
      type: "Point",
      coordinates: [10.6105, 34.7441], // Gabès
    },
    role: "restaurant_owner",
  },
  {
    id: 27,
    name: "Yasmine Zeller",
    email: "yasmine.zeller@example.com",
    password: "hashed_password_27",
    imagesUrl:
      "https://i.pinimg.com/736x/3b/4a/d4/3b4ad4374c3d1dd626abdc29cd5c4077--room-photo-tasting-room.jpg",
    balance: 901.23,
    location: {
      type: "Point",
      coordinates: [8.7483, 36.4573], // Tabarka
    },
    role: "restaurant_owner",
  },
  {
    id: 28,
    name: "Zachary Allen",
    email: "zachary.allen@example.com",
    password: "hashed_password_28",
    imagesUrl:
      "https://cdn.squaremeal.co.uk/article/8681/images/best-outdoor-restaurants-in-london-darbys_21032022120733.jpg",
    balance: 123.45,
    location: {
      type: "Point",
      coordinates: [9.3708, 37.2783], // Bizerte
    },
    role: "restaurant_owner",
  },
  {
    id: 29,
    name: "Zachary Allen",
    email: "zachary.allekkkn@example.com",
    password: "hashed_password_28",
    imagesUrl:
      "https://www.westsiderag.com/wp-content/uploads/2018/11/atlas1.jpeg",
    balance: 123.45,
    location: {
      type: "Point",
      coordinates: [9.3708, 37.2783], // Bizerte
    },
    role: "restaurant_owner",
  },
  {
    id: 30,
    name: "Zachary Allen",
    email: "zachary.alggglen@example.com",
    password: "hashed_password_28",
    imagesUrl:
      "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?cs=srgb&dl=chairs-coffee-shop-drinking-glasses-67468.jpg&fm=jpg",
    balance: 123.45,
    location: {
      type: "Point",
      coordinates: [9.3708, 37.2783], // Bizerte
    },
    role: "restaurant_owner",
  },
];

db.User.bulkCreate(seedusers)
  .then(() => {
    console.log("Users inserted successfully.");
  })
  .catch((error) => {
    console.error("Error inserting users:", error);
  });
