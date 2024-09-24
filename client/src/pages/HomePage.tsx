import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Banner from "../components/HomePage/Banner";
import Foods from "../components/HomePage/Foods";
import Footer from "../components/HomePage/Footer/Footer";
import RestaurantList from "../components/RestaurantList";
import HowItWorks from "../components/HomePage/HowItWorks";
import Testimonials from "../components/HomePage/Testimonials";
import SearchResults from "../components/SearchResults";

export const HomePage: React.FC = () => {
  const { results } = useSelector((state: RootState) => state.search);
  const hasSearchResults =
    results.menuItems.length > 0 || results.restaurants.length > 0;

  return (
    <div className="bg-gray-50">
      <Banner />
      {hasSearchResults ? (
        <SearchResults />
      ) : (
        <>
          <Foods />
          <HowItWorks />
          <RestaurantList />
          <Testimonials />
        </>
      )}
      <Footer />
    </div>
  );
};

export default HomePage;
