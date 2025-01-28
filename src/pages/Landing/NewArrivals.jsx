import React from "react";
import Rectangle from "./images/Rectangle.png";
import Ps5slim from "./images/Ps5slim.png";
import Attractivewoman from "./images/Attractivewoman.png";
import Speaker from "./images/Speaker.png";
import Perfume from "./images/Perfume.png";
import services5 from "../../assets/services5.png";
import services6 from "../../assets/services6.png";
import services7 from "../../assets/services7.png";
const NewArrivals = () => {
  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="flex items-center gap-10 py-5 px-5 mx-auto">
        <div className="flex items-center gap-10">
          <div className="">
            <img src={Rectangle} alt="Today's.png" />
          </div>
          <div className="font-bold text-red-600">
            <h2>Featured</h2>
          </div>
        </div>
      </div>
      <div className="ml-10">
        <div className="font-bold font-xl ">
          <p>New Arrival</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        <div>
          <div className="bg-black relative">
            <img src={Ps5slim} alt="" />
            <div className="absolute top-32 md:top-80 left-5 md:left-10 text-white">
              <h2 className=" text-xl md:text-3xl p-2 ">PlayStation 5</h2>
              <p className="text-sm md:text-md leading-3">Black and White version of the PS5 coming out on sale.</p>
              <p className="underline decoration-red-600">Shop Now</p>
            </div>
          </div>
        </div>
        <div className="bg-black h-71 relative">
          <img src={Attractivewoman} alt="" />
          <div className="absolute top-40 md:top-40 left-5 md:left-10 text-white">
            <h2 className=" text-xl md:text-3xl leading-8">Women’s Collections</h2>
            <p className="text-sm md:text-md leading-3">Featured woman collections that give you another vibe.</p>
            <p className="underline decoration-red-600">Shop Now</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-15 md:mt-2 relative">
            <div className="bg-black relative">
              <img src={Speaker} alt="" />
              <div className="absolute top-30 md:top-30 left-40 md:left-10 text-white">
                <h2 className="text-xl md:text-3xl leading-8">Speakers</h2>
                <p className="text-sm md:text-md leading-3">Amazon wireless speakers</p>
                <p className="underline decoration-red-600">Shop Now</p>
              </div>
            </div>
            <div className="bg-black relative">
              <img src={Perfume} alt="" />
              <div className="absolute top-30 md:top-30 left-40 md-left-85 text-white">
                <h2 className="text-xl md:text-3xl leading-6 md:leading-8">Perfume</h2>
                <p className="text-sm md:text-md leading-3">GUCCI INTENSE OUD EDP</p>
                <p className="underline decoration-red-600">Shop Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-10 mt-130 md:mt-10">
              <div className="px-4 md:px-8 py-4 sm:py-10 flex flex-col items-center gap-5">
                <img src={services5} alt="" className="max-w-20" />
                <div className="text-center">
                  <h1 className="font-sans text-lg font-semibold tracking-tight">
                    FREE AND FAST DELIVERY
                  </h1>
                  <p>Free delivery for all orders over $140</p>
                </div>
              </div>
              <div className="px-4 md:px-8 py-4 sm:py-10 flex flex-col items-center gap-5">
                <img src={services6} alt="" className="max-w-20" />
                <div className="text-center">
                  <h1 className="font-sans text-lg font-semibold tracking-tight">
                    24/7 CUSTOMER SERVICE
                  </h1>
                  <p>Friendly 24/7 customer support</p>
                </div>
              </div>
              <div className="px-4 md:px-8 py-4 sm:py-10 flex flex-col items-center gap-5">
                <img src={services7} alt="" className="max-w-20" />
                <div className="text-center">
                  <h1 className="font-sans text-lg font-semibold tracking-tight">
                    MONEY BACK GUARANTEE
                  </h1>
                  <p>We reurn money within 30 days</p>
                </div>
              </div>
            </div>
    </div>
  );
};

export default NewArrivals;
