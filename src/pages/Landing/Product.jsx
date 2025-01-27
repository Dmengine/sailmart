import React from "react";
import Rectangle from "./images/Rectangle.png";
import Product1 from "./images/Product1.png";
import Product2 from "./images/Product2.png";
import Product3 from "./images/Product3.png";
import Product5 from "./images/Product5.png";

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    href: "#",
    price: "$120",
    imageSrc: Product1,
    imageAlt: "Product Image 1.",
    rating: 4,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    href: "#",
    price: "$960",
    imageSrc: Product2,
    imageAlt: " Product Image 2.",
    rating: 4.1,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    href: "#",
    price: "$370",
    imageSrc: Product3,
    imageAlt: "Product Image 3.",
    rating: 3,
  },
  {
    id: 4,
    name: "S-Series Comfort Chair ",
    href: "#",
    price: "$375",
    imageSrc: Product5,
    imageAlt: "Product Image 4.",
    rating: 4,
  },
];

const Product = () => {
  return (
     <div className="container mx-auto ml-10 px-4">
      <div className="bg-white overflow-hidden mt-23">
      <div className="flex items-center gap-10 py-5 px-5 mx-auto">
        <div className="today-container flex gap-10">
          <div className="">
            <img src={Rectangle} alt="Today's deals banner" />
          </div>
          <div className="today-title font-bold text-red-600">
            <h2>Today's Deals</h2>
          </div>
        </div>
      </div>

      {/* Product Grid Section */}
      <div className="px-8 pb-8 overflow-hidden mx-auto mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-w-full">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white-100 border-none rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl"
            >
              {/* Product Image */}
              <div className="w-full p-10">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-50 object-contain rounded-t-lg transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.price}</p>
                <div className="flex items-center mt-2">
                  {/* Render stars for ratings */}
                  <div className="text-yellow-500 text-sm">
                    {"★".repeat(Math.floor(product.rating))}
                    {"☆".repeat(5 - Math.floor(product.rating))}
                  </div>
                  <p className="ml-2 text-sm text-gray-500">
                    ({product.rating.toFixed(1)})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* button */}
      <div className="flex items-center justify-center mt-5">
        <button className="w-40 px-3 py-3 text-white bg-red-600 rounded-md shadow-md hover:bg-red-400 hover:text-grey-400  focus:outline-none focus:ring-1 focus:ring-red-600">
          View All Products
        </button>
      </div>

      {/* hr */}
      <div>
        <hr className=" w-full h-1 borde-gray-600 m-24" />
      </div>
    </div>
     </div>
  );
};

export default Product;
