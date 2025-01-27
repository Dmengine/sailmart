import React from "react";
import about_img from "../../assets/about_img.png";
import services1 from "../../assets/services1.png";
import services2 from "../../assets/services2.png";
import services3 from "../../assets/services3.png";
import services4 from "../../assets/services4.png";
import services5 from "../../assets/services5.png";
import services6 from "../../assets/services6.png";
import services7 from "../../assets/services7.png";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";


const About = () => {
  return (
    <div>
      <div className="my-10 flex flex-col md:flex-row justify-center gap-16">
        <div className="container mx-auto flex flex-col lg:flex-col justify-center text-justify gap-5 pt-12 px-5 lg:px-16">
          <h1 className="font-sans text-4xl lg:text-xl pb-5 font-bold tracking-[.05em]">
            Our Story
          </h1>
          <p className="leading-8 tracking-tight">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="leading-8 tracking-tight">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <img
          src={about_img}
          alt=""
          className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[45%] max-w-full"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-5 lg:gap-10 mt-25">
        <div className="border border-gray-200 shadow-md flex flex-col items-center w-70 h-58 mt-10 p-10 text-base leading-10 transition-transform duration-300 hover:bg-red-600 hover:shadow-lg">
          <img src={services1} alt="" className="max-w-20" />
          <h1 className="font-sans text-2xl font-semibold pt-5 tracking-[.05em]">
            10.5k{" "}
          </h1>
          <p>Sallers active our site</p>
        </div>
        <div className="border border-gray-200 shadow-md flex flex-col items-center w-70 h-58 mt-10 p-10 text-base leading-10 transition-transform duration-300 hover:bg-red-600 hover:shadow-lg">
          <img src={services4} alt="" className="max-w-20" />
          <h1 className="font-sans text-2xl font-semibold pt-5 tracking-[.05em]">
            33k{" "}
          </h1>
          <p>Monthly Product Sale</p>
        </div>
        <div className="border border-gray-200 shadow-md flex flex-col items-center w-70 h-58 mt-10 p-10 text-base leading-10 transition-transform duration-300 hover:bg-red-600 hover:shadow-lg">
          <img src={services2} alt="" className="max-w-20" />
          <h1 className="font-sans text-2xl font-semibold pt-5 tracking-[.05em]">
            45.5k{" "}
          </h1>
          <p>Customer active in our site</p>
        </div>
        <div className="border border-gray-200 shadow-md flex flex-col items-center w-70 h-58 mt-10 p-10 text-base leading-10 transition-transform duration-300 hover:bg-red-600 hover:shadow-lg">
          <img src={services3} alt="" className="max-w-20" />
          <h1 className="font-sans text-2xl font-semibold pt-5 tracking-[.05em]">
            25k{" "}
          </h1>
          <p>Anual gross sale in our site</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-5 lg:gap-10 mt-60">
        <div className="px-4 md:px-8 py-4 sm:py-10 flex flex-col gap-5">
          <img src={person1} alt="" className="max-w-82" />
          <div>
            <h1 className="font-sans text-2xl font-semibold tracking-[.05em]">
              Will Smith
            </h1>
            <p className="mb-2 text-sm">Product Designer</p>
            <div className="flex flex-wrap gap-3">
              <img src={twitter} alt="" />
              <img src={instagram} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
        <div className="px-4 md:px-8 py-4 sm:py-10 flex flex-col gap-5">
          <img src={person2} alt="" className="max-w-82" />
          <div>
            <h1 className="font-sans text-2xl font-semibold tracking-[.05em]">
              Emma Watson
            </h1>
            <p className="mb-2 text-sm">Managing Director</p>
            <div className="flex flex-wrap gap-3">
              <img src={twitter} alt="" />
              <img src={instagram} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
        <div className="px-4 md:px-8 py-4 sm:py-10 flex flex-col gap-5">
          <img src={person3} alt="" className="max-w-82" />
          <div>
            <h1 className="font-sans text-2xl font-semibold tracking-[.05em]">
              Tom Cruise
            </h1>
            <p className="mb-2 text-sm">Founder & Chairman</p>
            <div className="flex flex-wrap gap-3">
              <img src={twitter} alt="" />
              <img src={instagram} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-10 mt-5">
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

export default About;
