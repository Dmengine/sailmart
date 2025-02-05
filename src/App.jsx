import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Cart from "./pages/cart/Cart";
import ProductList from "./pages/productList/ProductList";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import ProductDetails from "./pages/productDetails/ProductDetails";
import CheckoutPage from "./pages/checkout/Checkout";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/home/Home";
import WomenCat from "./pages/ProductCat/WomenCat";
import MenCat from "./pages/ProductCat/MenCat";
import JeweleryCat from "./pages/ProductCat/JeweleryCat";
import ElectroncsCat from "./pages/ProductCat/ElectronicsCat";
import SignUp from "./pages/login-signup/SignUp";
import Login from "./pages/login-signup/Login";
import Footer from "./pages/Landing/Footer";
import ProtectedRoute from "./component/ProtectedRoutes";
import ProfilePage from "./pages/profile/Profile";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Landing />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/productList/:id" element={<ProductDetails />} />
          <Route path="/About" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/WomenCat" element={<WomenCat />} />
          <Route path="/MenCat" element={<MenCat />} />
          <Route path="/JeweleryCat" element={<JeweleryCat />} />
          <Route path="/ElectronicsCat" element={<ElectroncsCat />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <CheckoutPage />
              </ProtectedRoute>
            }
          />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
