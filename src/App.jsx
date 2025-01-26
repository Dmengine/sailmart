import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from './pages/cart/Cart';
import ProductList from './pages/productList/ProductList';
import About from './pages/about/About';
import ProductDetails from './pages/productDetails/ProductDetails';
import CheckoutPage from './pages/checkout/Checkout';


const App = () => {
  return (
    <Router>
      <nav className="flex flex-col">
        <Link to="/">Product</Link>
        <Link to="/cart">Cart</Link>
        
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/productList/:id" element={<ProductDetails />} />
        <Route path="/About" element={<About/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path='/checkout' element={<CheckoutPage />} />
      </Routes>
    </Router>
  )
}

export default App