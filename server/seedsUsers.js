 const seedusers = [
    // 10 customers
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "hashed_password_1",
      "imagesUrl": "http://example.com/image1.jpg",
      "balance": 123.45,
      "location": "POINT(-73.935242 40.730610)",
      "role": "customer"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "password": "hashed_password_2",
      "imagesUrl": "http://example.com/image2.jpg",
      "balance": 234.56,
      "location": "POINT(-118.243683 34.052235)",
      "role": "customer"
    },
    {
      "id": 3,
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "password": "hashed_password_3",
      "imagesUrl": "http://example.com/image3.jpg",
      "balance": 345.67,
      "location": "POINT(-87.629799 41.878113)",
      "role": "customer"
    },
    {
      "id": 4,
      "name": "Bob Brown",
      "email": "bob.brown@example.com",
      "password": "hashed_password_4",
      "imagesUrl": "http://example.com/image4.jpg",
      "balance": 456.78,
      "location": "POINT(-122.419418 37.774929)",
      "role": "customer"
    },
    {
      "id": 5,
      "name": "Charlie Davis",
      "email": "charlie.davis@example.com",
      "password": "hashed_password_5",
      "imagesUrl": "http://example.com/image5.jpg",
      "balance": 567.89,
      "location": "POINT(-80.843124 35.227085)",
      "role": "customer"
    },
    {
      "id": 6,
      "name": "Diana Evans",
      "email": "diana.evans@example.com",
      "password": "hashed_password_6",
      "imagesUrl": "http://example.com/image6.jpg",
      "balance": 678.90,
      "location": "POINT(-96.796856 32.776665)",
      "role": "customer"
    },
    {
      "id": 7,
      "name": "Emily Foster",
      "email": "emily.foster@example.com",
      "password": "hashed_password_7",
      "imagesUrl": "http://example.com/image7.jpg",
      "balance": 789.01,
      "location": "POINT(-90.199402 38.627003)",
      "role": "customer"
    },
    {
      "id": 8,
      "name": "Frank Garcia",
      "email": "frank.garcia@example.com",
      "password": "hashed_password_8",
      "imagesUrl": "http://example.com/image8.jpg",
      "balance": 890.12,
      "location": "POINT(-104.990250 39.739236)",
      "role": "customer"
    },
    {
      "id": 9,
      "name": "Grace Harris",
      "email": "grace.harris@example.com",
      "password": "hashed_password_9",
      "imagesUrl": "http://example.com/image9.jpg",
      "balance": 901.23,
      "location": "POINT(-71.058884 42.360082)",
      "role": "customer"
    },
    {
      "id": 10,
      "name": "Hannah Ivers",
      "email": "hannah.ivers@example.com",
      "password": "hashed_password_10",
      "imagesUrl": "http://example.com/image10.jpg",
      "balance": 123.45,
      "location": "POINT(-73.567256 45.501689)",
      "role": "customer"
    },
  
    // 20 restaurant owners
    {
      "id": 11,
      "name": "Isabella Jones",
      "email": "isabella.jones@example.com",
      "password": "hashed_password_11",
      "imagesUrl": "http://example.com/image11.jpg",
      "balance": 234.56,
      "location": "POINT(-73.935242 40.730610)",
      "role": "restaurant_owner"
    },
    {
      "id": 12,
      "name": "Jack King",
      "email": "jack.king@example.com",
      "password": "hashed_password_12",
      "imagesUrl": "http://example.com/image12.jpg",
      "balance": 345.67,
      "location": "POINT(-118.243683 34.052235)",
      "role": "restaurant_owner"
    },
    {
      "id": 13,
      "name": "Katherine Lee",
      "email": "katherine.lee@example.com",
      "password": "hashed_password_13",
      "imagesUrl": "http://example.com/image13.jpg",
      "balance": 456.78,
      "location": "POINT(-87.629799 41.878113)",
      "role": "restaurant_owner"
    },
    {
      "id": 14,
      "name": "Liam Martinez",
      "email": "liam.martinez@example.com",
      "password": "hashed_password_14",
      "imagesUrl": "http://example.com/image14.jpg",
      "balance": 567.89,
      "location": "POINT(-122.419418 37.774929)",
      "role": "restaurant_owner"
    },
    {
      "id": 15,
      "name": "Mia Nelson",
      "email": "mia.nelson@example.com",
      "password": "hashed_password_15",
      "imagesUrl": "http://example.com/image15.jpg",
      "balance": 678.90,
      "location": "POINT(-80.843124 35.227085)",
      "role": "restaurant_owner"
    },
    {
      "id": 16,
      "name": "Noah Owens",
      "email": "noah.owens@example.com",
      "password": "hashed_password_16",
      "imagesUrl": "http://example.com/image16.jpg",
      "balance": 789.01,
      "location": "POINT(-96.796856 32.776665)",
      "role": "restaurant_owner"
    },
    {
      "id": 17,
      "name": "Olivia Perez",
      "email": "olivia.perez@example.com",
      "password": "hashed_password_17",
      "imagesUrl": "http://example.com/image17.jpg",
      "balance": 890.12,
      "location": "POINT(-90.199402 38.627003)",
      "role": "restaurant_owner"
    },
    {
      "id": 18,
      "name": "Paul Quinn",
      "email": "paul.quinn@example.com",
      "password": "hashed_password_18",
      "imagesUrl": "http://example.com/image18.jpg",
      "balance": 901.23,
      "location": "POINT(-104.990250 39.739236)",
      "role": "restaurant_owner"
    },
    {
      "id": 19,
      "name": "Quinn Robinson",
      "email": "quinn.robinson@example.com",
      "password": "hashed_password_19",
      "imagesUrl": "http://example.com/image19.jpg",
      "balance": 123.45,
      "location": "POINT(-71.058884 42.360082)",
      "role": "restaurant_owner"
    },
    {
      "id": 20,
      "name": "Rachel Smith",
      "email": "rachel.smith@example.com",
      "password": "hashed_password_20",
      "imagesUrl": "http://example.com/image20.jpg",
      "balance": 234.56,
      "location": "POINT(-73.567256 45.501689)",
      "role": "restaurant_owner"
    },
    {
      "id": 21,
      "name": "Samuel Taylor",
      "email": "samuel.taylor@example.com",
      "password": "hashed_password_21",
      "imagesUrl": "http://example.com/image21.jpg",
      "balance": 345.67,
      "location": "POINT(-73.935242 40.730610)",
      "role": "restaurant_owner"
    },
    {
      "id": 22,
      "name": "Tina Urban",
      "email": "tina.urban@example.com",
      "password": "hashed_password_22",
      "imagesUrl": "http://example.com/image22.jpg",
      "balance": 456.78,
      "location": "POINT(-118.243683 34.052235)",
      "role": "restaurant_owner"
    },
    {
      "id": 23,
      "name": "Ursula Vargas",
      "email": "ursula.vargas@example.com",
      "password": "hashed_password_23",
      "imagesUrl": "http://example.com/image23.jpg",
      "balance": 567.89,
      "location": "POINT(-87.629799 41.878113)",
      "role": "restaurant_owner"
    },
    {
      "id": 24,
      "name": "Victor Wilson",
      "email": "victor.wilson@example.com",
      "password": "hashed_password_24",
      "imagesUrl": "http://example.com/image24.jpg",
      "balance": 678.90,
      "location": "POINT(-122.419418 37.774929)",
      "role": "restaurant_owner"
    },
    {
      "id": 25,
      "name": "Wendy Xander",
      "email": "wendy.xander@example.com",
      "password": "hashed_password_25",
      "imagesUrl": "http://example.com/image25.jpg",
      "balance": 789.01,
      "location": "POINT(-80.843124 35.227085)",
      "role": "restaurant_owner"
    },
    {
      "id": 26,
      "name": "Xander Young",
      "email": "xander.young@example.com",
      "password": "hashed_password_26",
      "imagesUrl": "http://example.com/image26.jpg",
      "balance": 890.12,
      "location": "POINT(-96.796856 32.776665)",
      "role": "restaurant_owner"
    },
    {
      "id": 27,
      "name": "Yvonne Zimmerman",
      "email": "yvonne.zimmerman@example.com",
      "password": "hashed_password_27",
      "imagesUrl": "http://example.com/image27.jpg",
      "balance": 901.23,
      "location": "POINT(-90.199402 38.627003)",
      "role": "restaurant_owner"
    },
    {
      "id": 28,
      "name": "Zachary Adams",
      "email": "zachary.adams@example.com",
      "password": "hashed_password_28",
      "imagesUrl": "http://example.com/image28.jpg",
      "balance": 123.45,
      "location": "POINT(-104.990250 39.739236)",
      "role": "restaurant_owner"
    },
    {
      "id": 29,
      "name": "Ava Brooks",
      "email": "ava.brooks@example.com",
      "password": "hashed_password_29",
      "imagesUrl": "http://example.com/image29.jpg",
      "balance": 234.56,
      "location": "POINT(-71.058884 42.360082)",
      "role": "restaurant_owner"
    },
    {
      "id": 30,
      "name": "Ben Clark",
      "email": "ben.clark@example.com",
      "password": "hashed_password_30",
      "imagesUrl": "http://example.com/image30.jpg",
      "balance": 345.67,
      "location": "POINT(-73.567256 45.501689)",
      "role": "restaurant_owner"
    }
  ];
  db.User.bulkCreate(usersData)
.then(() => {
  console.log("Users inserted successfully.");
})
.catch((error) => {
  console.error("Error inserting users:", error);
});