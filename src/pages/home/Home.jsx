import React from "react";
import Product from "../Landing/Product";
import Categories from "../Landing/Categories";
import SidebarCarousel from "../Landing/SidebarCarousel";
import Bestselling from "../Landing/Bestselling";
import NewArrivals from "../Landing/NewArrivals";


const Home = () => {
  return (
    <div>
      <SidebarCarousel />
      <Product />
      <Categories />
      <Bestselling />
      <NewArrivals />
    </div>
  );
};

export default Home;
