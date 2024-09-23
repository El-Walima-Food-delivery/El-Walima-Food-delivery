import React from "react";
import AboutUs from "../components/AboutUs";
import Banner from "../components/HomePage/Banner";
import Foods from "../components/HomePage/Foods";
import Footer from "../components/HomePage/Footer/Footer";
import RestaurantList from "../components/RestaurantList";

export const HomePage: React.FC = () => {
  return (
    <>
      <Banner />
      <Foods />
      <RestaurantList />
      <AboutUs />
      <Footer />
    </>
  );
};

export default HomePage;
