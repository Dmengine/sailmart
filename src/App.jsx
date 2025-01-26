import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from './pages/cart/Cart';
import ProductList from './pages/productList/ProductList';
import Contact from './pages/contact/Contact';

const App = () => {
  return (
    <Router>
      <nav className="flex flex-col">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/">Product</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  )
}

export default App