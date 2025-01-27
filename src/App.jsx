import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Cart from "./pages/cart/Cart";
import ProductList from "./pages/productList/ProductList";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import ProductDetails from "./pages/productDetails/ProductDetails";
import CheckoutPage from "./pages/checkout/Checkout";
import Landing from "./pages/Landing/Landing";
import SidebarCarousel from "./pages/Landing/SidebarCarousel";
import Product from "./pages/Landing/Product";
import Categories from "./pages/Landing/Categories";
import Home from "./pages/home/Home";

const App = () => {
  return (
<div>
      <BrowserRouter>
        <Landing />
        {/* <Link to="/about">About</Link> */}
        {/* <Link to="/contact">Contact</Link> */}
        {/* <Link to="/">Product</Link> */}
        {/* <Link to="/cart">Cart</Link> */}
        

        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/productList/:id" element={<ProductDetails />} />
          <Route path="/About" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
    
    
  );
};

export default App;
