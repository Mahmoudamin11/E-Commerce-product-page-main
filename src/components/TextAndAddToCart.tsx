import {useState } from "react";
import plus from "../assets/icon-plus.svg";
import minus from "../assets/icon-minus.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

interface props { 
   inCartProducts :  () => void ;
   updateNum : (number:number) => void ;
}

const TextAndAddToCart = ({inCartProducts, updateNum}: props) => {
  const [inCart, setIncart] = useState(0);
  const plusInCart = () =>  {setIncart(inCart + 1), updateNum(inCart + 1) 
  };
  const minusInCart = () =>  {
    (inCart > 0) ? (setIncart(inCart - 1), updateNum(inCart - 1) ): null; 
    
  };
  return (
    <div className="p-5">
      <h1 className="uppercase font-fontBold tracking-wider text-orange text-sm">
        Sneaker Company
      </h1>
      <h2 className="text-black text-3xl md:text-4xl min-[1100px]:text-5xl font-fontBold my-5">
        Fall Limited Edition Sneakers
      </h2>
      <p className=" text-dark-grayish-blue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex justify-between max-[768px]items-center my-5 md:flex-col">
        <div className="relative md:mb-1">
          <span className="font-fontBold text-3xl mr-5 md:mr-4">$125.00</span>
          <span className=" absolute top-1/2 transform -translate-y-1/2 w-12 h-8 md:w-10 md:h-7 md:text-sm py-1 text-center px-2 rounded-lg bg-pale-orange text-orange">
            50%
          </span>
        </div>
        <span className="relative w-fit h-fit text-grayish-blue md:font-fontBold text-lg before:content-[''] before:absolute before:w-full before:h-[2px] before:top-1/2 before:transform before:left-0 before:-translate-y-1/2 before:bg-dark-grayish-blue">
          $250.00
        </span>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="w-full md:w-8/12  bg-light-grayish-blue py-3 md:py-4 md:mr-2 px-2 rounded-xl flex justify-between items-center">
          <img
            src={minus}
            onClick={() => minusInCart()}
            alt=""
            className="w-4 h-1 cursor-pointer"
          />
          <span className=" text-lg font-fontBold">{inCart}</span>
          <img
            src={plus}
            onClick={() => plusInCart()}
            alt=""
            className="w-4 h-4 cursor-pointer"
          />
        </div>
        <button id="addTocart" onClick={() => inCartProducts()} className="group relative bg-orange w-full py-4 px-2 rounded-lg flex items-center justify-center cursor-pointer my-5 shadow-addToCart">
          <FontAwesomeIcon icon={faCartShopping} size="lg" className="text-white mr-3" />
          <span className=" text-white font-fontBold text-xl ">
            Add to cart
          </span>
          <div className="hidden group-hover:block transition-all duration-150 absolute w-full h-full bg-white opacity-[30%] z-50"></div>
        </button>
      </div>
    </div>
  );
};

export default TextAndAddToCart;
