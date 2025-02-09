import React, { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SidebarCarousel = () => {
  const images = [
    "/Pc1.png",
    "/Pc2.png",
    "/Pc6.png",
    "/Pc8.png",
    "/Pc0.png"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="sidebar mx-auto mt-5 relative">
        {/* Categories Section */}
        <div>
          <div>
            <div className="hidden md:block text-red-600 font-bold ml-19">
              {loading ? (
                <Skeleton height={30} width={150} />
              ) : (
                <h2>CATEGORIES</h2>
              )}
            </div>
            <div className="flex flex-col-reverse md:flex-row items-start md:item-center justify-evenly py-2 px-2">
              <ul className="hidden sm:block">
                {loading ? (
                  <>
                    <Skeleton height={20} width={200} />
                    <Skeleton height={20} width={200} />
                    <Skeleton height={20} width={200} />
                    <Skeleton height={20} width={200} />
                    <Skeleton height={20} width={200} />
                    <Skeleton height={20} width={200} />
                    <Skeleton height={20} width={200} />
                    <Skeleton height={20} width={200} />
                    <Skeleton height={20} width={200} />
                  </>
                ) : (
                  <>
                    <li className="flex gap-20 py-1.5">
                      <a href="#">Women’s Fashion</a>
                      <img
                        src="/DropDown1.png"
                        alt="Dropdown Icon"
                        className="cursor-pointer"
                      />
                    </li>
                    <li className="flex gap-25 py-1.5">
                      <a href="#">Men’s Fashion</a>
                      <img
                        src="/DropDown1.png"
                        alt="Dropdown Icon"
                        className="cursor-pointer"
                      />
                    </li>
                    <li className="py-1.5">
                      <a href="#">Electronics</a>
                    </li>
                    <li className="py-1.5">
                      <a href="#">Home & Lifestyle</a>
                    </li>
                    <li className="py-1.5">
                      <a href="#">Medicine</a>
                    </li>
                    <li className="py-1.5">
                      <a href="#">Sports & Outdoors</a>
                    </li>
                    <li className="py-1.5">
                      <a href="#">Babies & Toys</a>
                    </li>
                    <li className="py-1.5">
                      <a href="#">Groceries & Pets</a>
                    </li>
                    <li className="py-1.5">
                      <a href="#">Health & Beauty</a>
                    </li>
                  </>
                )}
              </ul>

              <div className="md:hidden text-red-600 font-bold text-left">
                {loading ? (
                  <Skeleton height={30} width={150} />
                ) : (
                  <h2>CATEGORIES</h2>
                )}
              </div>

              <div className="hidden lg:block">
                {loading ? (
                  <Skeleton height={200} width={10} />
                ) : (
                  <img src="/Line.png" alt="Line Divider" />
                )}
              </div>

              {/* Carousel Section */}
              <div className="w-3/3 md:w-3/6 relative overflow-hidden bg-transparent">
                <div className="relative aspect-video overflow-hidden">
                  {loading ? (
                    <Skeleton height={200} width="100%" />
                  ) : (
                    images.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                          index === currentIndex
                            ? "translate-x-0"
                            : "translate-x-full"
                        }`}
                        style={{
                          transform: `translateX(${
                            (index - currentIndex) * 100
                          }%)`,
                        }}
                      >
                        <img
                          src={image}
                          alt={`Slide ${index + 1}`}
                          className="w-full h-full object-contain"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                    ))
                  )}
                </div>

                {/* Navigation Buttons */}
                {loading ? (
                  <>
                    <Skeleton height={40} width={40} circle={true} />
                    <Skeleton height={40} width={40} circle={true} />
                  </>
                ) : (
                  <>
                    <button
                      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-red-600 text-white p-2 rounded-full cursor-pointer"
                      onClick={prevSlide}
                    >
                      <AiOutlineLeft />
                    </button>
                    <button
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-red-600 text-white p-2 rounded-full cursor-pointer"
                      onClick={nextSlide}
                    >
                      <AiOutlineRight />
                    </button>
                  </>
                )}

                {/* Indicators */}
                <div className="absolute bottom-4 md:bottom-2 left-0 right-0 flex justify-center">
                  {loading ? (
                    <Skeleton
                      height={10}
                      width={10}
                      circle={true}
                      count={images.length}
                    />
                  ) : (
                    images.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
                          index === currentIndex ? "bg-red-600" : "bg-gray-400"
                        }`}
                        onClick={() => setCurrentIndex(index)}
                      />
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarCarousel;
