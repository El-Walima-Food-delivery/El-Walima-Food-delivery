import React from "react";
import AboutUs from "../components/HomePage/AboutUs";
import Foods from "../components/HomePage/Foods";
import Footer from "../components/HomePage/Footer/Footer";
import Banner from "../components/HomePage/Banner";

const HomePage: React.FC = () => {
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
