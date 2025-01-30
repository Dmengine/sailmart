import React, { useState, useEffect } from "react";
import Rectangle from "./images/Rectangle.png";
import CellPhone from "./images/CellPhone.png";
import Computer from "./images/Computer.png";
import SmartWatch from "./images/SmartWatch.png";
import Camera from "./images/Camera.png";
import HeadPhone from "./images/HeadPhone.png";
import Gamepad from "./images/Gamepad.png";
import RightArrow from './images/RightArrow.png'
import LeftArrow from './images/LeftArrow.png'
import { Link } from "react-router";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const Categories = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="flex items-center gap-10 py-5 px-5 mx-auto">
        <div className="flex items-center gap-10">
          <div className="">
            {loading ? (
              <Skeleton height={100} width={200} />
            ) : (
              <img src={Rectangle} alt="Today's.png" />
            )}
          </div>
          <div className="font-bold text-red-600">
            {loading ? (
              <Skeleton height={30} width={150} />
            ) : (
              <h2>CATEGORIES</h2>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mx-auto ml-10">
        <div className="font-bold font-xl ">
          {loading ? (
            <Skeleton height={20} width={200} />
          ) : (
            <p>Browse By Category</p>
          )}
        </div>
        <div className="flex items-center gap-5">
          {loading ? (
            <>
              <Skeleton height={40} width={40} />
              <Skeleton height={40} width={40} />
            </>
          ) : (
            <>
              <img src={RightArrow} alt="" className="w-10" />
              <img src={LeftArrow} alt="" className="w-10" />
            </>
          )}
        </div>
      </div>

      {/* CATEGORIES GRID */}
      <div>
        <div className="flex gap-10 px-10 py-10 justify-center">
          <div className="flex flex-col md:flex-row gap-10 px-10 py-10 mx-auto">
            {loading ? (
              Array(4)
                .fill()
                .map((_, index) => (
                  <div key={index} className="border p-10 flex flex-col items-center justify-center w-[180px] h-40 transition transform hover:scale-105 hover:shadow-xl hover:bg-red-500 hover:border-red-600">
                    <Skeleton height={50} width={50} />
                    <Skeleton height={20} width={100} />
                  </div>
                ))
            ) : (
              <>
                <div>
                  <Link to='/MenCat'>
                    <button className="border p-10 flex flex-col items-center justify-center w-[180px] h-40 transition transform hover:scale-105 hover:shadow-xl hover:bg-red-500 hover:border-red-600">
                      <img src={CellPhone} alt="" />
                      <p>Men's Cloth</p>
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to='/WomenCat'>
                    <button className="border p-10 flex flex-col items-center justify-center w-[180px] h-40 transition transform hover:scale-105 hover:shadow-xl hover:bg-red-500 hover:border-red-600">
                      <img src={Computer} alt="" />
                      <p>Women's Cloth</p>
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to='/ElectronicsCat'>
                    <button className="border p-10 flex flex-col items-center justify-center w-[180px] h-40 transition transform hover:scale-105 hover:shadow-xl hover:bg-red-500 hover:border-red-600">
                      <img src={SmartWatch} alt="" />
                      <p>Electronics</p>
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to='/JeweleryCat'>
                    <button className="border p-10 flex flex-col items-center justify-center w-[180px] h-40 transition transform hover:scale-105 hover:shadow-xl hover:bg-red-500 hover:border-red-600">
                      <img src={HeadPhone} alt="" />
                      <p>Jewelries</p>
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* hr */}
      <div>
        {loading ? (
          <Skeleton height={10} width="100%" />
        ) : (
          <hr className="w-full h-1 borde-gray-600 mx-auto mt-20" />
        )}
      </div>
    </div>
  );
};

export default Categories;