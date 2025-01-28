import React from "react";
import Product from "../Landing/Product";
import Categories from "../Landing/Categories";
import SidebarCarousel from "../Landing/SidebarCarousel";
import Bestselling from "../Landing/Bestselling";
import NewArrivals from "../Landing/NewArrivals";
import Footer from "../Landing/Footer";


const Home = () => {
  return (
    <div>
      <SidebarCarousel />
      <Product />
      <Categories />
      <Bestselling />
      <NewArrivals />
      <Footer />
    </div>
  );
};

export default Home;
