import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from './pages/cart/Cart';
import ProductList from './pages/productList/ProductList';
 contact-branch
import Contact from './pages/contact/Contact';

import About from './pages/about/About';
import ProductDetails from './pages/productDetails/ProductDetails';
import CheckoutPage from './pages/checkout/Checkout';
 main

const App = () => {
  return (
    <Router>
      <nav className="flex flex-col">
 contact-branch
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

 main
        <Link to="/">Product</Link>
        <Link to="/cart">Cart</Link>
        
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/productList/:id" element={<ProductDetails />} />
        <Route path="/About" element={<About/>} />
        <Route path="/cart" element={<Cart/>} />
 contact-branch
        <Route path="/contact" element={<Contact/>} />

        <Route path='/checkout' element={<CheckoutPage />} />
 main
      </Routes>
    </Router>
  )
}

export default App