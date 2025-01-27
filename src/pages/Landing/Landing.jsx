import React, { useState } from "react";
import DropDown from "./images/DropDown.png";
import { BsSearch, BsHeart, BsCart3, BsMenuButtonWideFill } from "react-icons/bs";

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Top Banner */}
      <div className="w-screen h-[30px] bg-black flex justify-evenly items-center">
        <div className="text-white text-sm">
          <h1>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%</h1>
        </div>
        <div className="text-white flex items-center gap-10">
          <p>English</p>
          <img src={DropDown} alt="dropdown.png" className="w-5" />
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="w-screen h-[50px] bg-white drop-shadow-md flex items-center justify-evenly">
        <div className="font-bold text-red-600">
          <h1>SAIL MART</h1>
        </div>

        {/* Main Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex item-center font-semibold gap-10">
            <li className="p-1 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer">Home</li>
            <li className="p-1 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer">Contact</li>
            <li className="p-1 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer">About</li>
            <li className="p-1 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer">Signup</li>
          </ul>
        </div>

        {/* Search Input */}
        <div className="hidden md:flex items-center relative">
          <BsSearch className="absolute left-3" size={15} />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-60 p-1 pl-8 rounded-sm border border-red-400 focus:outline-red-600"
          />
        </div>

        {/* Heart and Cart Icons */}
        <div className=" flex items-center gap-10">
          <BsHeart size={30} />
          <BsCart3 size={30} />
        </div>

        {/* Menu Icon for Small Screens */}
        <div className="md:hidden">
          <BsMenuButtonWideFill size={30} className="cursor-pointer" onClick={toggleMenu} />
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-white drop-shadow-md p-4`}>
        <ul className="flex flex-col gap-4 font-semibold">
          <li className="p-2 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer">Home</li>
          <li className="p-2 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer">Contact</li>
          <li className="p-2 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer">About</li>
          <li className="p-2 hover:bg-red-600 hover:text-white rounded-md transition-all cursor-pointer">Signup</li>
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
