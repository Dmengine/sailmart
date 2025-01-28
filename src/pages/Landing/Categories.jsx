import React from "react";
import Rectangle from "./images/Rectangle.png";
import CellPhone from "./images/CellPhone.png";
import Computer from "./images/Computer.png";
import SmartWatch from "./images/SmartWatch.png";
import Camera from "./images/Camera.png";
import HeadPhone from "./images/HeadPhone.png";
import Gamepad from "./images/Gamepad.png";
import RightArrow from './images/RightArrow.png'
import LeftArrow from './images/LeftArrow.png'

const Categories = () => {
  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="flex items-center gap-10 py-5 px-5 mx-auto">
        <div className="flex items-center gap-10">
          <div className="">
            <img src={Rectangle} alt="Today's.png" />
          </div>
          <div className="font-bold text-red-600">
            <h2>CATEGORIES</h2>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mx-auto ml-10">
        <div className="font-bold font-xl ">
          <p>Browse By Category</p>
        </div>
        <div className="flex items-center gap-5">
          <img src={RightArrow} alt="" className="w-10"/>
          <img src={LeftArrow} alt="" className="w-10"/>
        </div>
      </div>

      {/* CATEGORIES  GRID*/}

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 px-10 py-10 mx-auto">
          <div>
            <div className="border p-10 flex flex-col items-center justify-center h-40 hover:border-red-600 hover:text-red-600">
              <img src={CellPhone} alt="" />
              <p>Phones</p>
            </div>
          </div>
          <div>
            <div className="border p-10 flex flex-col items-center justify-center h-40 hover:border-red-600 hover:text-red-600">
              <img src={Computer} alt="" />
              <p>Computers</p>
            </div>
          </div>
          <div>
            <div className="border p-10 flex flex-col items-center justify-center h-40 hover:border-red-600 hover:text-red-600">
              <img src={SmartWatch} alt="" />
              <p>Smartwatch</p>
            </div>
          </div>
          <div>
            <div className="p-10 flex flex-col items-center justify-center h-40 bg-red-500 text-white hover:bg-black">
              <img src={Camera} alt="" />
              <p>Camera</p>
            </div>
          </div>
          <div>
            <div className="border p-10 flex flex-col items-center justify-center h-40 hover:border-red-600 hover:text-red-600">
              <img src={HeadPhone} alt="" />
              <p>Headphones</p>
            </div>
          </div>
          <div>
            <div className="border p-10 flex flex-col items-center justify-center h-40 hover:border-red-600 hover:text-red-600">
              <img src={Gamepad} alt="" />
              <p>Games</p>
            </div>
          </div>
        </div>
      </div>

      {/* hr */}
      <div>
        <hr className=" w-full h-1 borde-gray-600 mx-auto mt-20" />
      </div>
    </div>
  );
};

export default Categories;
