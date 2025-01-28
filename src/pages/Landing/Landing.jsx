import React, { useState } from "react";
import DropDown from "./images/DropDown.png";
import {
  BsSearch,
  BsHeart,
  BsCart3,
  BsMenuButtonWideFill,
  BsMinecartLoaded,
} from "react-icons/bs";
import { useCart } from "../../context/cartContext";

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, isCartOpen, setIsCartOpen } = useCart();
  // const { cartCount,  } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div>
      {/* Top Banner */}
      <div className="w-full bg-black flex flex-col md:flex-row justify-center items-center text-center py-2  md:justify-evenly">
        <div className="text-white text-sm">
          <h1>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%
          </h1>
        </div>
        <div className="text-white flex items-center gap-2">
          <p>English</p>
          <img src={DropDown} alt="dropdown.png" className="w-5" />
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="w-full h-[50px] bg-white drop-shadow-md flex items-center justify-evenly px-4">
        <div className="font-bold text-red-600">
          <h1>SAIL MART</h1>
        </div>

        {/* Main Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex item-center font-semibold gap-10">
            <a href='/'><li className="p-1 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer">Home</li></a>
            <a href='/contact'><li className="p-1 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer">Contact</li></a>
            <a href='/about'><li className="p-1 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer">About</li></a>
            <a href='/signup'><li className="p-1 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer">Signup</li></a>
          </ul>
        </div>

        {/* Search Input */}
        <div className="hidden md:flex items-center relative w-full max-w-[300px]">
          <BsSearch className="absolute left-3" size={15} />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full max-w-[240px] p-1 pl-8 rounded-sm border border-red-400 focus:outline-red-600"
          />
        </div>

        {/* Heart and Cart Icons */}
        <div className="relative flex items-center gap-10 cursor-pointer">
          <BsHeart size={30} />
          <BsMinecartLoaded size={30} onClick={toggleIsCartOpen} />
          <span
            style={{
              position: "absolute",
              top: 3,
              right: 10,
              fontSize: "14px",
            }}
          >
            {cartCount}
          </span>
        </div>

        {/* Menu Icon for Small Screens */}
        <div className="md:hidden">
          <BsMenuButtonWideFill
            size={30}
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-white drop-shadow-md p-4`}>
        <ul className="flex flex-col gap-4 font-semibold">
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
              Signup
            </li>
          </a>
        </ul>
        <div className="mt-4">
          <div className="flex items-center relative">
            <BsSearch className="absolute left-3" size={15} />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full p-2 pl-10 rounded-sm border border-red-400 focus:outline-red-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
