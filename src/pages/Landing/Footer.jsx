import React from "react";
import Qrcode from "./images/Qrcode.png";
import GooglePlay from "./images/GooglePlay.png";
import AppStore from "./images/AppStore.png";
import {
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsLinkedin,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="mt-20 mb-0 bg-black height-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        <div className="text-white">
          <div>
            <h1>Exclusive</h1>
          </div>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full max-w-[240px] p-1 pl-8 rounded-sm border border-red-400 focus:outline-red-600"
          />
        </div>
        <div className="text-white">
          <div>
            <h1>Support</h1>
          </div>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className="text-white">
          <div>
            <h1>Account</h1>
          </div>
          <p>
            <a href="#">My Account</a>
          </p>
          <p>
            <a href="#">Login/Register</a>
          </p>
          <p>
            <a href="#">Cart</a>
          </p>
          <p>
            <a href="#">Wishlist</a>
          </p>
          <p>
            <a href="#">shop</a>
          </p>
        </div>
        <div className="text-white">
          <div>
            <h1>Quick Link</h1>
          </div>
          <p>
            <a href="#">Privacy Policy</a>
          </p>
          <p>
            <a href="#">Terms Of Use</a>
          </p>
          <p>
            <a href="#"></a>FAQ
          </p>
          <p>
            <a href="#"></a>Contact
          </p>
        </div>
        <div className="text-white">
          <div>
            <h1>Download App</h1>
          </div>
          <p>
            <a href="#">Save $3 with App New User Only</a>
          </p>
          <div className="flex">
            <div>
              <img src={Qrcode} alt="" />
            </div>
            <div>
              <img src={GooglePlay} alt="" />
              <img src={AppStore} alt="" />
            </div>
          </div>
          <div className="flex">
            <BsFacebook />
            <BsInstagram />
            <BsTwitterX />
            <BsLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
