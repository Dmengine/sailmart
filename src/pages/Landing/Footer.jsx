import React, { useState, useEffect } from "react";
import Qrcode from "./images/Qrcode.png";
import GooglePlay from "./images/GooglePlay.png";
import AppStore from "./images/AppStore.png";
import {
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsLinkedin,
} from "react-icons/bs";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const Footer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-20 mb-0 bg-black height-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        <div className="text-white">
          <div>
            {loading ? (
              <Skeleton height={30} width={150} />
            ) : (
              <h1>Exclusive</h1>
            )}
          </div>
          <p>{loading ? <Skeleton height={20} width={100} /> : "Subscribe"}</p>
          <p>{loading ? <Skeleton height={20} width={200} /> : "Get 10% off your first order"}</p>
          {loading ? (
            <Skeleton height={30} width={240} />
          ) : (
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full max-w-[240px] p-1 pl-8 rounded-sm border border-red-400 focus:outline-red-600"
            />
          )}
        </div>
        <div className="text-white">
          <div>
            {loading ? (
              <Skeleton height={30} width={150} />
            ) : (
              <h1>Support</h1>
            )}
          </div>
          <p>{loading ? <Skeleton height={20} width={300} /> : "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh."}</p>
          <p>{loading ? <Skeleton height={20} width={200} /> : "exclusive@gmail.com"}</p>
          <p>{loading ? <Skeleton height={20} width={150} /> : "+88015-88888-9999"}</p>
        </div>
        <div className="text-white">
          <div>
            {loading ? (
              <Skeleton height={30} width={150} />
            ) : (
              <h1>Account</h1>
            )}
          </div>
          <p>{loading ? <Skeleton height={20} width={100} /> : <a href="#">My Account</a>}</p>
          <p>{loading ? <Skeleton height={20} width={150} /> : <a href="#">Login/Register</a>}</p>
          <p>{loading ? <Skeleton height={20} width={50} /> : <a href="#">Cart</a>}</p>
          <p>{loading ? <Skeleton height={20} width={100} /> : <a href="#">Wishlist</a>}</p>
          <p>{loading ? <Skeleton height={20} width={50} /> : <a href="#">Shop</a>}</p>
        </div>
        <div className="text-white">
          <div>
            {loading ? (
              <Skeleton height={30} width={150} />
            ) : (
              <h1>Quick Link</h1>
            )}
          </div>
          <p>{loading ? <Skeleton height={20} width={150} /> : <a href="#">Privacy Policy</a>}</p>
          <p>{loading ? <Skeleton height={20} width={150} /> : <a href="#">Terms Of Use</a>}</p>
          <p>{loading ? <Skeleton height={20} width={50} /> : <a href="#">FAQ</a>}</p>
          <p>{loading ? <Skeleton height={20} width={100} /> : <a href="#">Contact</a>}</p>
        </div>
        <div className="text-white">
          <div>
            {loading ? (
              <Skeleton height={30} width={150} />
            ) : (
              <h1>Download App</h1>
            )}
          </div>
          <p>{loading ? <Skeleton height={20} width={200} /> : <a href="#">Save $3 with App New User Only</a>}</p>
          <div className="flex">
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
                  <img src={GooglePlay} alt="" />
                  <img src={AppStore} alt="" />
                </>
              )}
            </div>
          </div>
          <div className="flex">
            {loading ? (
              <>
                <Skeleton height={30} width={30} circle={true} />
                <Skeleton height={30} width={30} circle={true} />
                <Skeleton height={30} width={30} circle={true} />
                <Skeleton height={30} width={30} circle={true} />
              </>
            ) : (
              <>
                <BsFacebook />
                <BsInstagram />
                <BsTwitterX />
                <BsLinkedin />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;