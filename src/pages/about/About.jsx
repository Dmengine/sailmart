import React from "react";

const About = () => {
  return (
    <div>
      <div className="my-10 flex flex-col lg:flex-row justify-center items-center gap-8">
        <div
          className="container flex flex-col lg:flex-col justify-center text-justify
         gap-5 pt-12 px-5 lg:px-16"
        >
          <h1 className="font-sans text-4xl lg:text-xl pb-5 font-bold tracking-[.05em]">
            Our Story
          </h1>
          <p className="leading-8 tracking-tight md:text-lg">
            Welcome to SAIL MART, your one-stop destination for quality products
            and seamless shopping! SAIL MART was born out of passion and
            innovation during our time at SAIL Nigeria’s Frontend Development
            Cohort. As a team of aspiring developers, we set out to build more
            than just a project, we aimed to create a fully functional eCommerce
            platform that reflects the skills, dedication, and teamwork we
            developed throughout the cohort.
          </p>
          <p className="leading-8 tracking-tight md:text-lg">
            At SAIL MART, we believe in efficiency, user-friendly design, and
            exceptional customer experience. Our platform is crafted to provide
            a smooth, hassle-free shopping journey, showcasing everything we
            have learned in web development, design, and functionality. More
            than just an eCommerce site, SAIL MART represents our growth,
            creativity, and commitment to delivering high-quality digital
            experiences. This project is a testament to how far we have come and
            where we are headed as future tech professionals. Thank you for
            being part of our journey. We hope you enjoy the SAIL MART
            experience!
          </p>
        </div>
        <img
          src="/about_img.png"
          alt=""
          className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[45%] max-w-full"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-5 lg:gap-10 mt-25 p-10">
        <div className="border border-gray-200 shadow-md flex flex-col items-center w-70 h-58 mt-10 p-10 md:p-10 text-base leading-10 transition-transform duration-300 hover:bg-red-600 hover:shadow-lg">
          <img src="/Services1.png" alt="" className="max-w-20" />
          <h1 className="font-sans text-2xl font-semibold pt-5 tracking-[.05em]">
            10.5k{" "}
          </h1>
          <p>Sallers active our site</p>
        </div>
        <div className="border border-gray-200 shadow-md flex flex-col items-center w-70 h-58 mt-10 p-10 text-base leading-10 transition-transform duration-300 hover:bg-red-600 hover:shadow-lg">
          <img src="/public/services4.png" alt="" className="max-w-20" />
          <h1 className="font-sans text-2xl font-semibold pt-5 tracking-[.05em]">
            33k{" "}
          </h1>
          <p>Monthly Product Sale</p>
        </div>
        <div className="border border-gray-200 shadow-md flex flex-col items-center w-70 h-58 mt-10 p-10 text-base leading-10 transition-transform duration-300 hover:bg-red-600 hover:shadow-lg">
          <img src="/public/services2.png" alt="" className="max-w-20" />
          <h1 className="font-sans text-2xl font-semibold pt-5 tracking-[.05em]">
            45.5k{" "}
          </h1>
          <p>Customer active in our site</p>
        </div>
        <div className="border border-gray-200 shadow-md flex flex-col items-center w-70 h-58 mt-10 mb-10 p-10 text-base leading-10 transition-transform duration-300 hover:bg-red-600 hover:shadow-lg">
          <img src="/public/services3.png" alt="" className="max-w-20" />
          <h1 className="font-sans text-2xl font-semibold pt-5 tracking-[.05em]">
            25k{" "}
          </h1>
          <p className="text-[1rem]">Anual gross sale in our site</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-5 lg:gap-10 mt-60 pr-10">
        <div className="px-4 md:px-10 py-4 sm:py-10 flex flex-col gap-5 transition-transform duration-300 hover:scale-105">
          <img
            src="/Oladimeji_Azzez.png"
            alt=""
            className="w-60 h-70 max-w-82 rounded-xl object-cover shadow-md"
          />
          <div>
            <h1 className="font-sans text-xl font-semibold tracking-[.05em]">
              Oladimeji Ayinde
            </h1>
            <p className="mb-2 text-sm">Team lead</p>
            <div className="flex flex-wrap gap-3">
              <img src="/twitter.png" alt="" />
              <img src="/instagram.png" alt="" />
              <img src="/linkedin.png" alt="" />
            </div>
          </div>
        </div>
        <div className="px-4 md:px-8 py-4 sm:py-10 flex flex-col gap-5 transition-transform duration-300 hover:scale-105">
          <img
            src="/Yusuf_Fesomu.png"
            alt=""
            className="w-60 h-70 max-w-82 rounded-xl object-cover shadow-md"
          />
          <div>
            <h1 className="font-sans text-xl font-semibold tracking-[.05em]">
              Fesomu Yusuf
            </h1>
            <p className="mb-2 text-sm">Assistant</p>
            <div className="flex flex-wrap gap-3">
              <img src="/twitter.png" alt="" />
              <img src="/instagram.png" alt="" />
              <img src="/linkedin.png" alt="" />
            </div>
          </div>
        </div>
        <div className="px-4 md:px-8 py-4 sm:py-10 flex flex-col gap-5 transition-transform duration-300 hover:scale-105">
          <img
            src="/Emem_E..png"
            alt=""
            className="w-60 h-70 max-w-82 rounded-xl object-cover shadow-md"
          />
          <div>
            <h1 className="font-sans text-xl font-semibold tracking-[.05em]">
              Emem Etukudo
            </h1>
            <p className="mb-2 text-sm">Community Manager</p>
            <div className="flex flex-wrap gap-3">
              <img src="/twitter.png" alt="" />
              <img src="/instagram.png" alt="" />
              <img src="/linkedin.png" alt="" />
            </div>
          </div>
        </div>
        <div className="px-4 md:px-8 py-4 sm:py-10 flex flex-col gap-5 transition-transform duration-300 hover:scale-105">
          <img
            src="/Faith_Kalu.png"
            alt=""
            className="w-60 h-70 max-w-82 rounded-xl object-cover shadow-md"
          />
          <div>
            <h1 className="font-sans text-xl font-semibold tracking-[.05em]">
              Onyeani Faith
            </h1>
            <p className="mb-2 text-sm">Facilitator</p>
            <div className="flex flex-wrap gap-3">
              <img src="/twitter.png" alt="" />
              <img src="/instagram.png" alt="" />
              <img src="/linkedin.png" alt="" />
            </div>
          </div>
        </div>
        <div className="px-4 md:px-8 py-4 sm:py-10 flex flex-col gap-5 transition-transform duration-300 hover:scale-105">
          <img
            src="/Aminat Amusa.png"
            alt=""
            className="w-60 h-70 max-w-82 rounded-xl object-cover shadow-md"
          />
          <div>
            <h1 className="font-sans text-xl font-semibold tracking-[.05em]">
              Aminat Amusa
            </h1>
            <p className="mb-2 text-sm">Team Member</p>
            <div className="flex flex-wrap gap-3">
              <img src="/twitter.png" alt="" />
              <img src="/instagram.png" alt="" />
              <img src="/linkedin.png" alt="" />
            </div>
          </div>
        </div>
        <div className="px-4 md:px-8 py-4 sm:py-10 flex flex-col gap-5 transition-transform duration-300 hover:scale-105">
          <img
            src="/Ochemeta_Mary_Francis.png"
            alt=""
            className="w-60 h-70 max-w-82 rounded-xl object-cover shadow-md"
          />
          <div>
            <h1 className="font-sans text-xl font-semibold tracking-[.05em]">
              Mary Francis
            </h1>
            <p className="mb-2 text-sm">Team Member</p>
            <div className="flex flex-wrap gap-3">
              <img src="/twitter.png" alt="" />
              <img src="/instagram.png" alt="" />
              <img src="/linkedin.png" alt="" />
            </div>
          </div>
        </div>
        <div className="px-4 md:px-8 py-4 sm:py-10 flex flex-col gap-5 transition-transform duration-300 hover:scale-105">
          <img
            src="/person3.png"
            alt=""
            className="w-60 h-70 max-w-82 rounded-xl object-cover shadow-md"
          />
          <div>
            <h1 className="font-sans text-xl font-semibold tracking-[.05em]">
              Emmanuel Alabi
            </h1>
            <p className="mb-2 text-sm">Team Member</p>
            <div className="flex flex-wrap gap-3">
              <img src="/twitter.png" alt="" />
              <img src="/instagram.png" alt="" />
              <img src="/linkedin.png" alt="" />
            </div>
          </div>
        </div>
        <div className="px-4 md:px-8 py-4 sm:py-10 flex flex-col gap-5 transition-transform duration-300 hover:scale-105">
          <img
            src="/Taoheed_Balogun.png"
            alt=""
            className="w-60 h-70 max-w-82 rounded-xl object-cover shadow-md"
          />
          <div>
            <h1 className="font-sans text-xl font-semibold tracking-[.05em]">
              Balogun Taoheed
            </h1>
            <p className="mb-2 text-sm">Team Member</p>
            <div className="flex flex-wrap gap-3">
              <img src="/twitter.png" alt="" />
              <img src="/instagram.png" alt="" />
              <img src="/linkedin.png" alt="" />
            </div>
          </div>
        </div>
        <div className="px-4 md:px-8 py-4 sm:py-10 flex flex-col gap-5 transition-transform duration-300 hover:scale-105">
          <img
            src="/Daniel_John.png"
            alt=""
            className="w-60 h-70 max-w-82 rounded-xl object-cover shadow-md"
          />
          <div>
            <h1 className="font-sans text-xl font-semibold tracking-[.05em]">
              Daniel John
            </h1>
            <p className="mb-2 text-sm">Team Member</p>
            <div className="flex flex-wrap gap-3">
              <img src="/twitter.png" alt="" />
              <img src="/instagram.png" alt="" />
              <img src="/linkedin.png" alt="" />
            </div>
          </div>
        </div>
        <div className="px-4 md:px-8 py-4 sm:py-10 flex flex-col gap-5 transition-transform duration-300 hover:scale-105">
          <img
            src="/Folarin.png"
            alt=""
            className="w-60 h-70 max-w-82 rounded-xl object-cover shadow-md"
          />
          <div>
            <h1 className="font-sans text-xl font-semibold tracking-[.05em]">
              Folarin Babatunde
            </h1>
            <p className="mb-2 text-sm">Team Member</p>
            <div className="flex flex-wrap gap-3">
              <img src="/twitter.png" alt="" />
              <img src="/instagram.png" alt="" />
              <img src="/linkedin.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-10 mt-5">
        <div className="px-4 md:px-8 py-4 sm:py-10 flex flex-col items-center gap-5">
          <img src="/public/services5.png" alt="" className="max-w-20" />
          <div className="text-center">
            <h1 className="font-sans text-lg font-semibold tracking-tight">
              FREE AND FAST DELIVERY
            </h1>
            <p>Free delivery for all orders over $140</p>
          </div>
        </div>
        <div className="px-4 md:px-8 py-4 sm:py-10 flex flex-col items-center gap-5">
          <img src="/public/services6.png" alt="" className="max-w-20" />
          <div className="text-center">
            <h1 className="font-sans text-lg font-semibold tracking-tight">
              24/7 CUSTOMER SERVICE
            </h1>
            <p>Friendly 24/7 customer support</p>
          </div>
        </div>
        <div className="px-4 md:px-8 py-4 sm:py-10 flex flex-col items-center gap-5">
          <img src="/public/services7.png" alt="" className="max-w-20" />
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
