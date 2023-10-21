import React, { useState } from "react";
import plus from "../assets/icon-plus.svg";
import minus from "../assets/icon-minus.svg";
import cart from "../assets/icon-cart.svg";

const TextAndAddToCart = () => {
  const [inCart, setIncart] = useState(0);
  return (
    <div className="p-5">
      <h1 className="uppercase font-fontBold tracking-wider text-orange text-sm">
        Sneaker Company
      </h1>
      <h2 className="text-black text-3xl font-fontBold my-5">
        Fall Limited Edition Sneakers
      </h2>
      <p className=" text-dark-grayish-blue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex justify-between items-center my-5">
        <div className="relative">
          <span className="font-fontBold text-3xl mr-5">$125.00</span>
          <span className=" absolute top-1/2 transform -translate-y-1/2 w-12 h-8 py-1 text-center px-2 rounded-lg bg-pale-orange text-orange">
            50%
          </span>
        </div>
        <span className="text-dark-grayish-blue text-lg line-through">
          $250.00
        </span>
      </div>
      <div className="w-full bg-light-grayish-blue py-3 px-5 rounded-xl flex justify-between items-center">
        <img
          src={minus}
          onClick={() => {
            inCart >= 1 ? setIncart(inCart - 1) : null;
          }}
          alt=""
          className="w-4 h-1 cursor-pointer"
        />
        <span className=" text-lg font-fontBold">{inCart}</span>
        <img
          src={plus}
          onClick={() => setIncart(inCart + 1)}
          alt=""
          className="w-4 h-4 cursor-pointer"
        />
      </div>

      <button className=" bg-orange w-full py-4 px-2 rounded-lg flex items-center justify-center cursor-pointer my-5">
        {/* change this to fontawesome icon when internet comes back  */}
        <img src={cart} alt="" className="mr-3 mb-1 text-white" />
        <span className=" text-white font-fontBold text-xl shadow-addToCart">
          Add to cart
        </span>
      </button>
    </div>
  );
};

export default TextAndAddToCart;
