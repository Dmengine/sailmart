import React from "react";
import Product from "../Landing/Product";
import Categories from "../Landing/Categories";
import SidebarCarousel from "../Landing/SidebarCarousel";

const Home = () => {
  return (
    <div>
      <SidebarCarousel />
      <Product />
      <Categories />
    </div>
  );
};

export default Home;
