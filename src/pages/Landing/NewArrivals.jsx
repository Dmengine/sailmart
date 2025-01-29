import React, { useState, useEffect } from "react";
import Rectangle from "./images/Rectangle.png";
import Ps5slim from "./images/Ps5slim.png";
import Attractivewoman from "./images/Attractivewoman.png";
import Speaker from "./images/Speaker.png";
import Perfume from "./images/Perfume.png";
import services5 from "../../assets/services5.png";
import services6 from "../../assets/services6.png";
import services7 from "../../assets/services7.png";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const NewArrivals = () => {
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
              <h2>Featured</h2>
            )}
          </div>
        </div>
      </div>
      <div className="ml-10">
        <div className="font-bold font-xl ">
          {loading ? (
            <Skeleton height={20} width={200} />
          ) : (
            <p>New Arrival</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        <div>
          <div className="bg-black relative">
            {loading ? (
              <Skeleton height={400} width="100%" />
            ) : (
              <img src={Ps5slim} alt="" />
            )}
            <div className="absolute top-32 md:top-80 left-5 md:left-10 text-white">
              {loading ? (
                <>
                  <Skeleton height={30} width={200} />
                  <Skeleton height={20} width={300} />
                  <Skeleton height={20} width={100} />
                </>
              ) : (
                <>
                  <h2 className=" text-xl md:text-3xl p-2 ">PlayStation 5</h2>
                  <p className="text-sm md:text-md leading-3">Black and White version of the PS5 coming out on sale.</p>
                  <p className="underline decoration-red-600">Shop Now</p>
                </>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="bg-black relative">
            {loading ? (
              <Skeleton height={400} width="100%" />
            ) : (
              <img src={Attractivewoman} alt="" />
            )}
            <div className="absolute top-32 md:top-80 left-5 md:left-10 text-white">
              {loading ? (
                <>
                  <Skeleton height={30} width={200} />
                  <Skeleton height={20} width={300} />
                  <Skeleton height={20} width={100} />
                </>
              ) : (
                <>
                  <h2 className=" text-xl md:text-3xl p-2 ">Attractive Woman</h2>
                  <p className="text-sm md:text-md leading-3">Black and White version of the PS5 coming out on sale.</p>
                  <p className="underline decoration-red-600">Shop Now</p>
                </>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="bg-black relative">
            {loading ? (
              <Skeleton height={400} width="100%" />
            ) : (
              <img src={Speaker} alt="" />
            )}
            <div className="absolute top-32 md:top-80 left-5 md:left-10 text-white">
              {loading ? (
                <>
                  <Skeleton height={32} width={200} />
                  <Skeleton height={22} width={300} />
                  <Skeleton height={22} width={100} />
                </>
              ) : (
                <>
                  <h2 className=" text-xl md:text-3xl p-2 ">Speaker</h2>
                  <p className="text-sm md:text-md leading-3">Black and White version of the PS5 coming out on sale.</p>
                  <p className="underline decoration-red-600">Shop Now</p>
                </>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="bg-black relative">
            {loading ? (
              <Skeleton height={400} width="100%" />
            ) : (
              <img src={Perfume} alt="" />
            )}
            <div className="absolute top-32 md:top-80 left-5 md:left-10 text-white">
              {loading ? (
                <>
                  <Skeleton height={32} width={200} />
                  <Skeleton height={22} width={300} />
                  <Skeleton height={22} width={100} />
                </>
              ) : (
                <>
                  <h2 className=" text-xl md:text-3xl p-2 ">Perfume</h2>
                  <p className="text-sm md:text-md leading-3">Black and White version of the PS5 coming out on sale.</p>
                  <p className="underline decoration-red-600">Shop Now</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* hr */}
      <div>
        {loading ? (
          <Skeleton height={10} width="100%" />
        ) : (
          <hr className=" w-full h-1 borde-gray-600 mx-auto mt-20" />
        )}
      </div>
    </div>
  );
};

export default NewArrivals;