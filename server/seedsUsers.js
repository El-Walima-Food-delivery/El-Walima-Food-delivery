 
 const db= require("./models/index");
 const seedusers = [
    // 10 customers
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "hashed_password_1",
      "imagesUrl": "https://media.istockphoto.com/id/1389348844/fr/photo/plan-de-studio-dune-belle-jeune-femme-souriante-debout-sur-un-fond-gris.jpg?s=612x612&w=0&k=20&c=VGipX3a8xrbYuXTNm_61pFuzpGdAO9lwt2xnVUd7Khs=",
      "balance": 123.45,
      "location": {
        "type": 'Point',
        "coordinates": [-73.935242, 40.730610] // New York (longitude, latitude)
      },
      "role": "customer"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "password": "hashed_password_2",
      "imagesUrl": "https://media.istockphoto.com/id/682897825/fr/photo/confident-businesswoman-over-gray-background.jpg?s=612x612&w=0&k=20&c=OcDGuIswfOhS21Fwg_uxb6O8MXEQK5IrjMqkguihdAk=",
      "balance": 234.56,
      location: {
        type: 'Point',
        coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
      },
     
      "role": "customer"
    },
    {
      "id": 3,
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "password": "hashed_password_3",
      "imagesUrl": "https://media.istockphoto.com/id/1171169099/fr/photo/homme-avec-les-bras-crois%C3%A9s-disolement-sur-le-fond-gris.jpg?s=612x612&w=0&k=20&c=csQeB3utGtrGeb3WmdSxRYXaJvUy_xqlhbOIZxclcGA=",
      "balance": 345.67,
      location: {
        type: 'Point',
        coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
      },
      
      "role": "customer"
    },
    // {
    //   "id": 4,
    //   "name": "Bob Brown",
    //   "email": "bob.brown@example.com",
    //   "password": "hashed_password_4",
    //   "imagesUrl": "https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg",
    //   "balance": 456.78,
    //   location: {
    //     type: 'Point',
    //     coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
    //   },
      
    //   "role": "customer"
    // },
    // {
    //   "id": 5,
    //   "name": "Charlie Davis",
    //   "email": "charlie.davis@example.com",
    //   "password": "hashed_password_5",
    //   "imagesUrl": "https://media.istockphoto.com/id/1386479313/fr/photo/heureuse-femme-daffaires-afro-am%C3%A9ricaine-mill%C3%A9naire-posant-isol%C3%A9e-sur-du-blanc.jpg?s=612x612&w=0&k=20&c=CS0xj40eNCorQyzN1ImeMKlvPDocPHSaMsXethQ-Q_g=",
    //   "balance": 567.89,
    //   location: {
    //     type: 'Point',
    //     coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
    //   },
      
    //   "role": "customer"
    // },
    // {
    //   "id": 6,
    //   "name": "Diana Evans",
    //   "email": "diana.evans@example.com",
    //   "password": "hashed_password_6",
    //   "imagesUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKdG3zlo6rsY1oNgUyNAvPLl96-OGHAswLvQ&s",
    //   "balance": 678.90,
    //   location: {
    //     type: 'Point',
    //     coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
    //   },
     
    //   "role": "customer"
    // },
    // {
    //   "id": 7,
    //   "name": "Emily Foster",
    //   "email": "emily.foster@example.com",
    //   "password": "hashed_password_7",
    //   "imagesUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Old_woman_in_Kyrgyzstan%2C_2010.jpg/800px-Old_woman_in_Kyrgyzstan%2C_2010.jpg",
    //   "balance": 789.01,
    //   location: {
    //     type: 'Point',
    //     coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
    //   },
     
    //   "role": "customer"
    // },
    // {
    //   "id": 8,
    //   "name": "Frank Garcia",
    //   "email": "frank.garcia@example.com",
    //   "password": "hashed_password_8",
    //   "imagesUrl": "https://www.le7.info/media/cache/article/uploads/photos/64101bd1e383a.jpeg",
    //   "balance": 890.12,
    //   location: {
    //     type: 'Point',
    //     coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
    //   },
      
    //   "role": "customer"
    // },
    // {
    //   "id": 9,
    //   "name": "Grace Harris",
    //   "email": "grace.harris@example.com",
    //   "password": "hashed_password_9",
    //   "imagesUrl": "https://www.le7.info/media/cache/article/uploads/photos/64101bd1e383a.jpeg",
    //   "balance": 901.23,
    
    //   "role": "customer"
    // },
    // {
    //   "id": 10,
    //   "name": "Hannah Ivers",
    //   "email": "hannah.ivers@example.com",
    //   "password": "hashed_password_10",
    //   "imagesUrl": "https://www.soladis.com/wp-content/uploads/2017/06/personne-1-1.png",
    //   "balance": 123.45,
    //   location: {
    //     type: 'Point',
    //     coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
    //   },
      
    //   "role": "customer"
    // },
  
    // // 20 restaurant owners
    // {
    //   "id": 11,
    //   "name": "Isabella Jones",
    //   "email": "isabella.jones@example.com",
    //   "password": "hashed_password_11",
    //   "imagesUrl": "https://www.restoconnection.fr/wp-content/uploads/2015/02/fa%C3%A7ade-restaurant-architecture-sake-manzo-bejing.jpg",
    //   "balance": 234.56,
    //   location: {
    //     type: 'Point',
    //     coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
    //   },
      
    //   "role": "restaurant_owner"
    // },
    // {
    //   "id": 12,
    //   "name": "Jack King",
    //   "email": "jack.king@example.com",
    //   "password": "hashed_password_12",
    //   "imagesUrl": "https://www.createursdinterieur.com/static/4fc8ce556e777abdb2ba81b6a1f4d368/4b190/facade-restaurant-renove-architecte.jpg",
    //   "balance": 345.67,
    //   location: {
    //     type: 'Point',
    //     coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
    //   },
      
    //   "role": "restaurant_owner"
    // },
    // {
    //   "id": 13,
    //   "name": "Katherine Lee",
    //   "email": "katherine.lee@example.com",
    //   "password": "hashed_password_13",
    //   "imagesUrl": "https://media-cdn.tripadvisor.com/media/photo-s/0b/22/45/43/facade-du-restaurant.jpg",
    //   "balance": 456.78,
    //   location: {
    //     type: 'Point',
    //     coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
    //   },
      
    //   "role": "restaurant_owner"
    // },
    // {
    //   "id": 14,
    //   "name": "Liam Martinez",
    //   "email": "liam.martinez@example.com",
    //   "password": "hashed_password_14",
    //   "imagesUrl": "https://i.pinimg.com/originals/ca/01/4d/ca014dfc3a8d79d449425e322306fc76.jpg",
    //   "balance": 567.89,
    //   location: {
    //     type: 'Point',
    //     coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
    //   },

      
    //   "role": "restaurant_owner"
    // },
    // {
    //   "id": 15,
    //   "name": "Mia Nelson",
    //   "email": "mia.nelson@example.com",
    //   "password": "hashed_password_15",
    //   "imagesUrl": "https://media-cdn.tripadvisor.com/media/photo-s/0b/22/45/43/facade-du-restaurant.jpgg",
    //   "balance": 678.90,
    //   location: {
    //     type: 'Point',
    //     coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
    //   },
      
    //   "role": "restaurant_owner"
    // },
    // {
    //   "id": 16,
    //   "name": "Noah Owens",
    //   "email": "noah.owens@example.com",
    //   "password": "hashed_password_16",
    //   "imagesUrl": "https://media-cdn.tripadvisor.com/media/photo-s/17/cb/93/3c/la-facade-et-la-terrasse.jpg",
    //   "balance": 789.01,
    //   location: {
    //     type: 'Point',
    //     coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
    //   },
     
    //   "role": "restaurant_owner"
    // },
    // {
    //   "id": 17,
    //   "name": "Olivia Perez",
    //   "email": "olivia.perez@example.com",
    //   "password": "hashed_password_17",
    //   "imagesUrl": "https://tybraz.fr/wp-content/uploads/2016/03/final.jpg",
    //   "balance": 890.12,
    //   location: {
    //     type: 'Point',
    //     coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
    //   },
     
    //   "role": "restaurant_owner"
    // },
    // {
    //   "id": 18,
    //   "name": "Paul Quinn",
    //   "email": "paul.quinn@example.com",
    //   "password": "hashed_password_18",
    //   "imagesUrl": "https://boissiereetfils.fr/wwwdir/uploads/renovation-devanture-restaurent-millau-carre_rouge.jpg",
    //   "balance": 901.23,
    //   location: {
    //     type: 'Point',
    //     coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
    //   },
      
    //   "role": "restaurant_owner"
    // },
    // {
    //   "id": 19,
    //   "name": "Quinn Robinson",
    //   "email": "quinn.robinson@example.com",
    //   "password": "hashed_password_19",
    //   "imagesUrl": "https://boissiereetfils.fr/wwwdir/uploads/renovation-devanture-magasin-restaurant-millau-aveyron.jpg",
    //   "balance": 123.45,
    //   location: {
    //     type: 'Point',
    //     coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
    //   },
      
    //   "role": "restaurant_owner"
    // },
    // {
    //   "id": 20,
    //   "name": "Rachel Smith",
    //   "email": "rachel.smith@example.com",
    //   "password": "hashed_password_20",
    //   "imagesUrl": "https://img.freepik.com/psd-premium/maquette-enseigne-facade-du-restaurant_72104-2986.jpg",
    //   "balance": 234.56,
    //   location: {
    //     type: 'Point',
    //     coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
    //   },
      
    //   "role": "restaurant_owner"
    // },
    // {
    //   "id": 21,
    //   "name": "Samuel Taylor",
    //   "email": "samuel.taylor@example.com",
    //   "password": "hashed_password_21",
    //   "imagesUrl": "https://www.plexysign.com/public/img/big/habillagefacadeoriginaleplexysignapresjpg_61893e17647ab.jpg",
    //   "balance": 345.67,
    //   location: {
    //     type: 'Point',
    //     coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
    //   },
      
    //   "role": "restaurant_owner"
    // },
    // {
    //   "id": 22,
    //   "name": "Tina Urban",
    //   "email": "tina.urban@example.com",
    //   "password": "hashed_password_22",
    //   "imagesUrl": "https://www.createursdinterieur.com/static/6635156040703f1115edca685bfce00f/4b190/facade-du-restaurant.jpg",
    //   "balance": 456.78,
    //   location: {
    //     type: 'Point',
    //     coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
    //   },
     
    //   "role": "restaurant_owner"
    // },
    // {
    //   "id": 23,
    //   "name": "Ursula Vargas",
    //   "email": "ursula.vargas@example.com",
    //   "password": "hashed_password_23",
    //   "imagesUrl": "https://www.ideesmaison.com/Inspirations/Photos/Facade-du-restaurant-Milano-thumb-844-630-473.jpg",
    //   "balance": 567.89,
    //   location: {
    //     type: 'Point',
    //     coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
    //   },
      
    //   "role": "restaurant_owner"
    // },
    // {
    //   "id": 24,
    //   "name": "Victor Wilson",
    //   "email": "victor.wilson@example.com",
    //   "password": "hashed_password_24",
    //   "imagesUrl": "https://www.digitalsyndrom.net/wp-content/uploads/2017/10/pizzahut1-1200x565.jpg",
    //   "balance": 678.90,
    //   location: {
    //     type: 'Point',
    //     coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
    //   },
      
    //   "role": "restaurant_owner"
    // },
    // {
    //   "id": 25,
    //   "name": "Wendy Xander",
    //   "email": "wendy.xander@example.com",
    //   "password": "hashed_password_25",
    //   "imagesUrl": "https://www.amconcept.archi/wp-content/uploads/2022/12/restaurant-coreen-nouvelle-facade.jpg",
    //   "balance": 789.01,
    //   location: {
    //     type: 'Point',
    //     coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
    //   },
     
    //   "role": "restaurant_owner"
    // },
    // {
    //   "id": 26,
    //   "name": "Xander Young",
    //   "email": "xander.young@example.com",
    //   "password": "hashed_password_26",
    //   "imagesUrl": "https://media2.ledevoir.com/images_galerie/nwd_661301_507144/image.jpg",
    //   "balance": 890.12,
    //   location: {
    //     type: 'Point',
    //     coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
    //   },
      
    //   "role": "restaurant_owner"
    // },
    // {
    //   "id": 27,
    //   "name": "Yvonne Zimmerman",
    //   "email": "yvonne.zimmerman@example.com",
    //   "password": "hashed_password_27",
    //   "imagesUrl": "https://www.jmt-diffusion.com/upload/common/empty-tables-street-cafe-morning-istanbul.jpg",
    //   "balance": 901.23,
    //   location: {
    //     type: 'Point',
    //     coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
    //   },
      
    //   "role": "restaurant_owner"
    // },
    // {
    //   "id": 28,
    //   "name": "Zachary Adams",
    //   "email": "zachary.adams@example.com",
    //   "password": "hashed_password_28",
    //   "imagesUrl": "https://images.lamaisondestravaux.com/media/cache/post/rc/qBQfnBiA/2021-10-15/245d02152d3c46a3637e60cd0eb3254a.jpeg",
    //   "balance": 123.45,
    //   location: {
    //     type: 'Point',
    //     coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
    //   },
     
    //   "role": "restaurant_owner"
    // },
    // {
    //   "id": 29,
    //   "name": "Ava Brooks",
    //   "email": "ava.brooks@example.com",
    //   "password": "hashed_password_29",
    //   "imagesUrl": "https://mir-s3-cdn-cf.behance.net/projects/404/5631d4202829567.Y3JvcCwxMDUwLDgyMiwxODQsMA.jpg",
    //   "balance": 234.56,
    //   location: {
    //     type: 'Point',
    //     coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
    //   },
      
    //   "role": "restaurant_owner"
    // },
    // {
    //   "id": 30,
    //   "name": "Ben Clark",
    //   "email": "ben.clark@example.com",
    //   "password": "hashed_password_30",
    //   "imagesUrl": "https://www.jmt-diffusion.com/upload/common/restaurant-italien.jpg",
    //   "balance": 345.67,
    //   location: {
    //     type: 'Point',
    //     coordinates: [-73.935242, 40.730610] // New York (longitude, latitude)
    //   },
      
    //   "role": "restaurant_owner"
    // }
  ];
  console.log(db);
  db.User.bulkCreate(seedusers)
.then(() => {
  console.log("Users inserted successfully.");
})
.catch((error) => {
  console.error("Error inserting users:", error);
});