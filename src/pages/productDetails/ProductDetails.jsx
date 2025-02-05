import React, { useEffect, useState } from "react";
import { useCart } from "../../context/cartContext";
import { useParams } from "react-router-dom";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import { Link } from "react-router";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductDetails = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  // New state for selected color and size
  const [selectedColor, setSelectedColor] = useState("gray");
  const [selectedSize, setSelectedSize] = useState("S");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [id]);

  if (loading) {
    return (
      <div>
        {/* ... Your loading skeleton code ... */}
        <div className="bg-gray-100 py-8">
          {/* Skeletons code remains unchanged */}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="flex space-x-4 mb-4">
                <div className="flex flex-col space-y-4">
                  <img
                    className="w-[150px] md:h-[125px] h-[76px]"
                    src={product.image}
                    alt={product.title}
                  />
                  <img
                    className="w-[150px] md:h-[125px] h-[76px]"
                    src={product.image}
                    alt={product.title}
                  />
                  <img
                    className="w-[150px] md:h-[125px] h-[76px]"
                    src={product.image}
                    alt={product.title}
                  />
                  <img
                    className="w-[150px] md:h-[125px] h-[76px]"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="rounded-lg dark:bg-gray-700 mb-4">
                  <img
                    className="md:w-[550px] md:h-[550px] w-[550px] h-[350px]"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
              </div>

              <div className="flex -mx-2 mb-4 items-center">
                <div className="w-1/2 px-2">
                  <button
                    onClick={() => addToCart({ ...product, selectedColor, selectedSize })}
                    className="w-full bg-red-800 dark:bg-red-600 text-white py-2 px-4 rounded-full font-bold hover:bg-red-500 dark:hover:bg-red-300 cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <Link to="/cart">
                    <button className="md:w-[200px] w-[150px] bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer">
                      Go to Cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {product.title}
              </h2>
              <div className="flex gap-2 items-center my-4">
                <img src="/star_icon.png" alt="" />
                <img src="/star_icon.png" alt="" />
                <img src="/star_icon.png" alt="" />
                <img src="/star_icon.png" alt="" />
                <img src="/star_dull_icon.png" alt="" />
              </div>

              <div className="my-4">
                <p className="text-sm font-bold">
                  rate: ({product.rating.rate})
                </p>
                <p className="text-sm font-bold">
                  count: {product.rating.count}
                </p>
              </div>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700">Price:</span>
                  <span className="text-gray-600">${product.price}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700">Availability:</span>
                  <span className="text-gray-600">In Stock</span>
                </div>
              </div>

              {/* Color selection */}
              <div className="mb-4">
                <span className="font-bold text-gray-700">Select Color:</span>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => setSelectedColor("gray")}
                    className={`w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2 cursor-pointer ${
                      selectedColor === "gray" ? "border-2 border-black" : ""
                    }`}
                  ></button>
                  <button
                    onClick={() => setSelectedColor("red")}
                    className={`w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2 cursor-pointer ${
                      selectedColor === "red" ? "border-2 border-black" : ""
                    }`}
                  ></button>
                  <button
                    onClick={() => setSelectedColor("blue")}
                    className={`w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2 cursor-pointer ${
                      selectedColor === "blue" ? "border-2 border-black" : ""
                    }`}
                  ></button>
                  <button
                    onClick={() => setSelectedColor("yellow")}
                    className={`w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2 cursor-pointer ${
                      selectedColor === "yellow" ? "border-2 border-black" : ""
                    }`}
                  ></button>
                </div>
              </div>

              {/* Size selection */}
              <div className="mb-4">
                <span className="font-bold text-gray-700">Select Size:</span>
                <div className="flex items-center mt-2">
                  {["S", "M", "L", "XL", "XXL"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600 cursor-pointer ${
                        selectedSize === size ? "border-2 border-black" : ""
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-bold text-gray-700">
                  Product Description:
                </span>
                <p className="text-gray-600 text-sm mt-2">
                  {product.description}
                </p>
              </div>

              <div className="mt-4">
                <p>Category: {product.category}</p>
                <p>Tags: Modern, Latest</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default ProductDetails;
