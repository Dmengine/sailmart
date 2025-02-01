import React, { useEffect, useState } from "react";
// import Rectangle from "./images/Rectangle.png";
// import Jbl from "./images/Jbl.png";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const Bestselling = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const [targetDate, setTargetDate] = useState(new Date());
  useEffect(() => {
    const date = new Date();
    date.setDate(date.getDate() + 4);
    setTargetDate(date); 
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);

    return () => clearInterval(timer); 
  }, [targetDate]);

  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="flex items-center gap-10 py-5 px-5 mx-auto">
        <div className="flex items-center gap-10">
          <div className="">
            {loading ? (
              <Skeleton height={100} width={200} />
            ) : (
              <img src="/Rectangle.png" alt="Today's.png" />
            )}
          </div>
          <div className="font-bold text-red-600">
            {loading ? (
              <Skeleton height={30} width={150} />
            ) : (
              <h2>THIS MONTH</h2>
            )}
          </div>
        </div>
      </div>
      <div className="ml-10">
        <div className="font-bold font-xl ">
          {loading ? (
            <Skeleton height={20} width={200} />
          ) : (
            <p>Best Selling Products</p>
          )}
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

      <div className="bg-linear-to-r from-black to-black-500 p-10 mx-auto md:ml-5 mt-10 rounded">
        <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-evenly">
          <div>
            {loading ? (
              <Skeleton height={200} width={200} />
            ) : (
              <img src="/Jbl.png" alt="" />
            )}
          </div>
          <div>
            <div className="font-bold text-5xl text-white p-5">
              {loading ? (
                <Skeleton height={50} width={300} />
              ) : (
                <h1>
                  Enhance <span className="text-red-600">Your</span> Music
                  Experience
                </h1>
              )}
            </div>
            <div className="flex gap-2 text-center p-5">
              {loading ? (
                <>
                  <Skeleton height={50} width={50} />
                  <Skeleton height={50} width={50} />
                  <Skeleton height={50} width={50} />
                  <Skeleton height={50} width={50} />
                </>
              ) : (
                <>
                  <div className=" border-none w-18 rounded-md bg-white p-2">
                    <h3>{timeLeft.days}</h3>
                    <p>Days</p>
                  </div>
                  <div className="border-none w-18 rounded bg-white p-2">
                    <h3>{timeLeft.hours}</h3>
                    <p>Hours</p>
                  </div>
                  <div className="border-none w-18 rounded bg-white p-2">
                    <h3>{timeLeft.minutes}</h3>
                    <p>Minutes</p>
                  </div>
                  <div className="border-none w-18 rounded bg-white p-2">
                    <h3>{timeLeft.seconds}</h3>
                    <p>Seconds</p>
                  </div>
                </>
              )}
            </div>
            {/* button */}
            <div className="p-5">
              {loading ? (
                <Skeleton height={50} width={150} />
              ) : (
                <button className="bg-red-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 transition duration-300">
                  Buy Now
                </button>
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

export default Bestselling;