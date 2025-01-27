import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import ProductList from "./pages/productList/ProductList";
import Landing from "./pages/Landing/Landing";
import SidebarCarousel from "./pages/Landing/SidebarCarousel";
import Product from "./pages/Landing/Product";
import Categories from "./pages/Landing/Categories";


const App = () => {
  return (
    {
      /*// <Router>
    //   <nav className="flex flex-col">
    //     <Link to="/about">About</Link>
    //     <Link to="/">Product</Link>
    //     <Link to="/cart">Cart</Link>
    //   </nav>
    //   <Routes>
    //     <Route path="/" element={<ProductList />} />
    //     <Route path="/cart" element={<Cart/>} />
    //   </Routes>
    // </Router>*/
    },
    (
      <div className="App">
        <Landing />
        <SidebarCarousel />
        <Product /> 
        <Categories />
      </div>
    )
  );
};

export default App;
