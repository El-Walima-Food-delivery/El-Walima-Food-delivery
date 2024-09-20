import React from "react";
import AboutUs from "../components/AboutUs";
import Banner from "../components/HomePage/Banner";
import Foods from "../components/HomePage/Foods";
import Footer from "../components/HomePage/Footer/Footer";

export const HomePage: React.FC = () => {
  return (
    <>
      <Banner />
      <Foods />

      <AboutUs />
      <Footer />
    </>
  );
};

export default HomePage;
