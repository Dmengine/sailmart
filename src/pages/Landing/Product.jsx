import React, { useEffect, useState } from "react";
import Rectangle from "./images/Rectangle.png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Product = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=4"
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000); // Set a timer for 2 seconds
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto md:ml-10 px-4">
      <div className="bg-white overflow-hidden mt-5 md:mt-23">
        <div className="flex items-center gap-10 py-5 px-5 mx-auto">
          <div className="flex items-center gap-10">
            <div className="">
              {loading ? (
                <Skeleton height={100} width={200} />
              ) : (
                <img src={Rectangle} alt="Today's deals banner" />
              )}
            </div>
            <div className="today-title font-bold text-red-600">
              {loading ? (
                <Skeleton height={30} width={150} />
              ) : (
                <h2>Today's Deals</h2>
              )}
            </div>
          </div>
        </div>

        {/* Product Grid Section */}
        <div className="px-8 pb-8 overflow-hidden mx-auto mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-w-full">
            {loading
              ? Array(4)
                  .fill()
                  .map((_, index) => (
                    <div
                      key={index}
                      className="bg-white-100 border-none rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl"
                    >
                      <div className="w-full p-10 h-[250px]">
                        <Skeleton height={250} />
                      </div>
                      <div className="p-4">
                        <Skeleton height={20} width="80%" />
                        <Skeleton height={30} width="60%" />
                        <Skeleton height={20} width="40%" />
                      </div>
                    </div>
                  ))
              : products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white-100 border-none rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl"
                  >
                    <a href={`/productList/${product.id}`}>
                      {/* Product Image */}
                      <div className="w-full p-10 h-[250px]">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-50 object-contain rounded-t-lg transition-transform duration-300 hover:scale-110"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {product.title.substring(0, 12)}
                        </h3>
                        <p className="text-3xl md:text-xl font-bold text-gray-900 dark:text-white">
                          ${product.price}
                        </p>
                        <div className="flex items-center mt-2">
                          {/* Render stars for ratings */}
                          <div className="text-yellow-500 text-sm">
                            {"★".repeat(Math.floor(product.rating.rate))}
                            {"☆".repeat(5 - Math.floor(product.rating.rate))}
                          </div>
                          <p className="ml-2 text-sm text-gray-500">
                            ({product.rating.rate.toFixed(1)})
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
          </div>
        </div>
        {/* button */}
        <div className="flex items-center justify-center mt-5">
          {loading ? (
            <Skeleton height={50} width={200} />
          ) : (
            <a href="/ProductList">
              <button className="w-40 px-3 py-3 text-white bg-red-600 rounded-md shadow-md hover:bg-red-400 hover:text-grey-400  focus:outline-none focus:ring-1 focus:ring-red-600 cursor-pointer">
                View All Products
              </button>
            </a>
          )}
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
    </div>
  );
};

export default Product;
