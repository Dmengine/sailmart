import React, { useState, useEffect } from "react";
import DropDown1 from "./images/DropDown1.png";
import Line from "./images/Line.png";
import Pc1 from "./images/Pc1.png";
import Pc2 from "./images/Pc2.png";
import Pc3 from "./images/Pc3.png";
import Pc4 from "./images/Pc4.png";
import Pc5 from "./images/Pc5.png";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const SidebarCarousel = () => {
  const images = [Pc1, Pc2, Pc3, Pc4, Pc5]; 
  const [currentIndex, setCurrentIndex] = useState(0);

  
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

  return (
    <div>
      <div className="sidebar ml-30 mt-5 relative">
        {/* Categories Section */}
        <div>
          <div>
            <div className="text-red-600 font-bold">
              <h2>CATEGORIES</h2>
            </div>
            <div className="flex items-center gap-5 py-2 px-2">
              <ul>
                <li className="flex gap-20 py-1.5">
                  <a href="#">Women’s Fashion</a>
                  <img src={DropDown1} alt="Dropdown Icon" />
                </li>
                <li className="flex gap-25 py-1.5">
                  <a href="#">Men’s Fashion</a>
                  <img src={DropDown1} alt="Dropdown Icon" />
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
              </ul>
              <div>
                <img src={Line} alt="Line Divider" />
              </div>

              {/* Carousel Section */}
              <div className="w-3/4 relative shadow-lg overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  {images.map((image, index) => (
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
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <button
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-red-600 text-white p-2 rounded-full"
                  onClick={prevSlide}
                >
                  <AiOutlineLeft />
                </button>
                <button
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-red-600 text-white p-2 rounded-full"
                  onClick={nextSlide}
                >
                  <AiOutlineRight />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  {images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
                        index === currentIndex ? "bg-red-600" : "bg-gray-400"
                      }`}
                      onClick={() => setCurrentIndex(index)}
                    />
                  ))}
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
