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
    <div>
      <div className="flex items-center gap-10 py-5 px-5 ml-24">
        <div className="today-container flex gap-10">
          <div className="">
            <img src={Rectangle} alt="Today's deals banner" />
          </div>
          <div className="today-title font-bold text-red-600">
            <h2>CATEGORIES</h2>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="ml-30 font-bold font-xl ">
          <p>Browse By Category</p>
        </div>
        <div className="flex items-center gap-5">
          <img src={RightArrow} alt="" />
          <img src={LeftArrow} alt="" />
        </div>
      </div>

      {/* CATEGORIES  GRID*/}

      <div>
        <div className="grid grid-cols-6 gap-10 px-10 py-10 ml-24">
          <div>
            <div className="border p-10 flex flex-col items-center justify-center h-40">
              <img src={CellPhone} alt="" />
              <p>Phones</p>
            </div>
          </div>
          <div>
            <div className="border p-10 flex flex-col items-center justify-center h-40">
              <img src={Computer} alt="" />
              <p>Computers</p>
            </div>
          </div>
          <div>
            <div className="border p-10 flex flex-col items-center justify-center h-40">
              <img src={SmartWatch} alt="" />
              <p>Smartwatch</p>
            </div>
          </div>
          <div>
            <div className="border p-10 flex flex-col items-center justify-center h-40 bg-red-500 text-white">
              <img src={Camera} alt="" />
              <p>Camera</p>
            </div>
          </div>
          <div>
            <div className="border p-10 flex flex-col items-center justify-center h-40">
              <img src={HeadPhone} alt="" />
              <p>Headphones</p>
            </div>
          </div>
          <div>
            <div className="border p-10 flex flex-col items-center justify-center h-40">
              <img src={Gamepad} alt="" />
              <p>Games</p>
            </div>
          </div>
        </div>
      </div>

      {/* hr */}
      <div>
        <hr className=" w-full h-1 borde-gray-600 m-24" />
      </div>
    </div>
  );
};

export default Categories;
