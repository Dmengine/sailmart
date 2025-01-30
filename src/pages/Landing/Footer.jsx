import React, { useState, useEffect } from "react";
import Qrcode from "./images/Qrcode.png";
import GooglePlay from "./images/GooglePlay.png";
import AppStore from "./images/AppStore.png";
import {
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsLinkedin,
  BsSend,
} from "react-icons/bs";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Footer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-20 bg-black text-white">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 p-10 md:p-16 lg:p-20">
          <div className="p-5">
            <div>
              {loading ? (
                <Skeleton height={30} width={150} />
              ) : (
                <h1 className="text-xl font-semibold">Exclusive</h1>
              )}
            </div>
            <p className="text-lg mt-3">
              {loading ? <Skeleton height={20} width={100} /> : "Subscribe"}
            </p>
            <p className="text-sm mt-2">
              {loading ? (
                <Skeleton height={20} width={200} />
              ) : (
                "Get 10% off your first order"
              )}
            </p>
            <div className="relative">
              {loading ? (
                <Skeleton height={30} width={240} />
              ) : (
                <>
                  <BsSend className="absolute top-6 left-52 md:left-35" />
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="w-full max-w-[240px] p-2  rounded-md border border-gray-400 focus:outline-gray-600 mt-3"
                  />
                </>
              )}
            </div>
          </div>
          <div className="p-5">
            <div>
              {loading ? (
                <Skeleton height={30} width={150} />
              ) : (
                <h1 className="text-xl font-semibold">Support</h1>
              )}
            </div>
            <p className="text-sm mt-3">
              {loading ? (
                <Skeleton height={20} width={300} />
              ) : (
                "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh."
              )}
            </p>
            <p className="text-sm mt-2">
              {loading ? (
                <Skeleton height={20} width={200} />
              ) : (
                "exclusive@gmail.com"
              )}
            </p>
            <p className="text-sm mt-2">
              {loading ? (
                <Skeleton height={20} width={150} />
              ) : (
                "+88015-88888-9999"
              )}
            </p>
          </div>
          <div className="p-5">
            <div>
              {loading ? (
                <Skeleton height={30} width={150} />
              ) : (
                <h1 className="text-xl font-semibold">Account</h1>
              )}
            </div>
            <ul className="mt-3 space-y-2">
              <li>
                {loading ? (
                  <Skeleton height={20} width={100} />
                ) : (
                  <a href="#" className="hover:text-red-400">
                    My Account
                  </a>
                )}
              </li>
              <li>
                {loading ? (
                  <Skeleton height={20} width={150} />
                ) : (
                  <a href="#" className="hover:text-red-400">
                    Login/Register
                  </a>
                )}
              </li>
              <li>
                {loading ? (
                  <Skeleton height={20} width={50} />
                ) : (
                  <a href="#" className="hover:text-red-400">
                    Cart
                  </a>
                )}
              </li>
              <li>
                {loading ? (
                  <Skeleton height={20} width={100} />
                ) : (
                  <a href="#" className="hover:text-red-400">
                    Wishlist
                  </a>
                )}
              </li>
              <li>
                {loading ? (
                  <Skeleton height={20} width={50} />
                ) : (
                  <a href="#" className="hover:text-red-400">
                    Shop
                  </a>
                )}
              </li>
            </ul>
          </div>
          <div className="p-5">
            <div>
              {loading ? (
                <Skeleton height={30} width={150} />
              ) : (
                <h1 className="text-xl font-semibold">Quick Link</h1>
              )}
            </div>
            <ul className="mt-3 space-y-2">
              <p>
                {loading ? (
                  <Skeleton height={20} width={150} />
                ) : (
                  <a href="#" className="hover:text-red-400">
                    Privacy Policy
                  </a>
                )}
              </p>
              <p>
                {loading ? (
                  <Skeleton height={20} width={150} />
                ) : (
                  <a href="#" className="hover:text-red-400">
                    Terms of Use
                  </a>
                )}
              </p>
              <p>
                {loading ? (
                  <Skeleton height={20} width={50} />
                ) : (
                  <a href="#" className="hover:text-red-400">
                    FAQ
                  </a>
                )}
              </p>
              <p>
                {loading ? (
                  <Skeleton height={20} width={100} />
                ) : (
                  <a href="#" className="hover:text-red-400">
                    Contact
                  </a>
                )}
              </p>
            </ul>
          </div>
          <div className="p-5">
              <h1 className="text-xl font-semibold">Download App</h1>

              <p className="text-sm mt-3">
                <a href="#">Save $3 with App New User Only</a>
              </p>
              <div className="flex items-center gap-2 mt-2">
                <div>
                  {loading ? (
                    <Skeleton height={100} width={100} />
                  ) : (
                    <img src={Qrcode} alt="" />
                  )}
                </div>
                <div>
                  {loading ? (
                    <>
                      <Skeleton height={50} width={150} />
                      <Skeleton height={50} width={150} />
                    </>
                  ) : (
                    <>
                      <img src={GooglePlay} alt="googleplay" className="mb-2" />
                      <img src={AppStore} alt="appstore" />
                    </>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4 mt-4 text-xl">
                {loading ? (
                  <>
                    <Skeleton height={30} width={30} circle={true} />
                    <Skeleton height={30} width={30} circle={true} />
                    <Skeleton height={30} width={30} circle={true} />
                    <Skeleton height={30} width={30} circle={true} />
                  </>
                ) : (
                  <>
                    <BsFacebook className="hover:text-red-400 cursor-pointer" />
                    <BsInstagram className="hover:text-red-400 cursor-pointer" />
                    <BsTwitterX className="hover:text-red-400 cursor-pointer" />
                    <BsLinkedin className="hover:text-red-400 cursor-pointer" />
                  </>
                )}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
