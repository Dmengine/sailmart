import React, { useState, useEffect } from "react";
// import DropDown from "./images/DropDown.png";
import {
  BsSearch,
  BsHeart,
  BsCart3,
  BsMenuButtonWideFill,
} from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useCart } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, isCartOpen, setIsCartOpen } = useCart();

  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  const [userLoggedin, setUserLoggedin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserLoggedin(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/ProductList?search=${encodeURIComponent(searchInput)}`);
    setSearchInput("");
  };

  return (
    <div>
      {/* Top Banner */}
      <div className="w-full bg-black flex flex-col md:flex-row justify-center md:justify-evenly items-center text-center py-2">
        <div className="text-white text-sm">
          <h1 className="marquee">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%
          </h1>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="w-full h-[50px] bg-white drop-shadow-md flex items-center justify-evenly px-4">
        <div className="font-bold text-red-600">
          <Link to="/">
            <h1>SAIL MART</h1>
          </Link>
        </div>

        {/* Main Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex item-center font-semibold gap-4 md:gap-10">
            <a href="/">
              <li className="p-1 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer">
                Home
              </li>
            </a>
            <a href="/contact">
              <li className="p-1 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer">
                Contact
              </li>
            </a>
            <a href="/about">
              <li className="p-1 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer">
                About
              </li>
            </a>
            <a href="/SignUp">
              <li className="p-1 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer">
                {userLoggedin ? (
                  <button onClick={handleLogout}>Logout</button>
                ) : (
                  <Link to="/signup">SignUp</Link>
                )}
              </li>
            </a>
          </ul>
        </div>

        {/* Search Input */}
        <div className="hidden p-5 md:flex items-center relative w-full max-w-[300px] ">
          <form onSubmit={handleSearch}>
            <BsSearch className="absolute top-8  lg:left-7" size={13} />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full max-w-[240px] p-1 pl-8 rounded-sm border border-red-400 focus:outline-red-600"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </form>
        </div>

        {/* Heart and Cart Icons */}
        <div className="relative flex items-center gap-10 cursor-pointer">
          <BsHeart size={30} />
          <Link to="/cart">
            <BsCart3 size={30} onClick={toggleIsCartOpen} />
            <span
              style={{
                position: "absolute",
                bottom: 15,
                left: 85,
                textAlign: "center",
                fontSize: "13px",
                width: "20px",
                height: "20px",
                borderRadius: "100%",
                background: "red",
                color: "white",
              }}
            >
              {cartCount}
            </span>
          </Link>
          <div>
            <Link to="/profile">
              <CgProfile size={30} className="cursor-pointe text-red-600" />
            </Link>
          </div>
        </div>

        {/* Menu Icon for Small Screens */}
        <div className="md:hidden">
          {loading ? (
            <Skeleton height={30} width={30} />
          ) : (
            <BsMenuButtonWideFill
              size={30}
              className="cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white drop-shadow-md p-4 max-w-full px-4`}
      >
        <ul className="flex flex-col gap-4 font-semibold">
          {loading ? (
            <>
              <Skeleton height={20} width={100} />
              <Skeleton height={20} width={100} />
              <Skeleton height={20} width={100} />
              <Skeleton height={20} width={100} />
            </>
          ) : (
            <>
              <a href="/">
                <li className="p-2 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer">
                  Home
                </li>
              </a>
              <a href="/contact">
                <li className="p-2 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer">
                  Contact
                </li>
              </a>
              <a href="/About">
                <li className="p-2 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer">
                  About
                </li>
              </a>
              <a href="/signup">
                <li className="p-2 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer">
                  {userLoggedin ? (
                    <button onClick={handleLogout}>Logout</button>
                  ) : (
                    <Link to="/signup">SignUp</Link>
                  )}
                </li>
              </a>
            </>
          )}
        </ul>
        <div className="mt-4">
          <div className="flex items-center relative">
            {loading ? (
              <Skeleton height={30} width={300} />
            ) : (
              <>
                <form onSubmit={handleSearch}>
                  <BsSearch className="absolute left-3 top-4" size={15} />
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="w-full p-2 pl-10 rounded-sm border border-red-400 focus:outline-red-600"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
