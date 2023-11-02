import { useState } from "react";
import pro1 from "../assets/image-product-1.jpg";
import pro2 from "../assets/image-product-2.jpg";
import pro3 from "../assets/image-product-3.jpg";
import pro4 from "../assets/image-product-4.jpg";
import next from "../assets/icon-next.svg";
import prev from "../assets/icon-previous.svg";
import ShowInCart from "./ShowInCart";
import TextAndAddToCart from "./TextAndAddToCart";
import thumb1 from "../assets/image-product-1-thumbnail.jpg";
import thumb2 from "../assets/image-product-2-thumbnail.jpg";
import thumb3 from "../assets/image-product-3-thumbnail.jpg";
import thumb4 from "../assets/image-product-4-thumbnail.jpg";




const ImageSlider = (props:any) => {
  const [imgNum, setImgNum] = useState(1);
  const [number, setnum] = useState(0);
  const [transfer, setTransfer] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => { 
    setCurrentWidth(window.innerWidth)
  });
  const editNum = (n:number) =>  { 
    setTransfer(n);
  };
  const getNumberInCart = () => { 
     setnum(transfer);           // edits the number in cart to the new value 
     props.sender(transfer); // this show the number on the cart icon
  };
  const setNumToZero = () =>  { 
    setnum(0);
    props.sender(0);
    // setDeleted(1);
    // getNumberInCart(0);
  };
  const [picMaximized, setPicMaximized] = useState(0);
  return (
    <div className="md:grid md:grid-cols-[1fr,1fr] min-[1047px]:gap-20 min-[1100px]:grid-cols-[465px,530px]  min-[1076px]:place-content-center  md:gap-10 md:mt-14 md:px-8">
    <div className="relative h-[37%] sm:h-[70%] overflow-y-hidden md:overflow-visible">
      {props.state == 1 && <ShowInCart deleteFun={setNumToZero} prods={number}/>}
      
      {currentWidth < 768 && 
      <button
        id="next"
        onClick={() => {
          imgNum == 4 ? setImgNum(1) : setImgNum(imgNum + 1);
        }}
        className=" absolute top-[45%] right-[5%] bg-white  z-30 w-9 h-9 rounded-full flex justify-center items-center"
      >
        <img src={next} alt="" />
      </button>}
      <div id="pro1" className="relative w-full">
        {imgNum == 1 && <img onClick={() => setPicMaximized(1)} src={pro1} alt="" className="-z-50 w-full cursor-pointer md:min-h-[420px] md:rounded-lg"/>}
        {imgNum == 2 && <img onClick={() => setPicMaximized(2)} src={pro2} alt="" className={"-z-50 w-full cursor-pointer md:min-h-[420px] md:rounded-lg "} />}
        {imgNum == 3 && <img onClick={() => setPicMaximized(3)} src={pro3} alt="" className={"-z-50 w-full cursor-pointer md:min-h-[420px] md:rounded-lg "} />}
        {imgNum == 4 && <img onClick={() => setPicMaximized(4)} src={pro4} alt="" className={"-z-50 w-full cursor-pointer md:min-h-[420px] md:rounded-lg "} />}
      </div>
      
      {currentWidth >= 768 && 
      <div id="thumbs" className="mt-5 flex justify-around">
        <div onClick={() => { setImgNum(1)}} className={imgNum == 1 ? "relative w-16 cursor-pointer md:rounded-lg border border-orange ":"w-16 cursor-pointer md:rounded-lg"}  >
          <img src={thumb1} alt="" className="rounded-lg" />
          {imgNum == 1 && <div className=" absolute w-full h-full bg-white opacity-[50%] z-40 top-0 left-0 rounded-lg"></div>}
        </div>

        <div onClick={() => { setImgNum(2)}} className={imgNum == 2 ? "relative w-16 cursor-pointer md:rounded-lg border border-orange ":"w-16 cursor-pointer md:rounded-lg"}>
          <img src={thumb2} className="rounded-lg" alt="" />
          {imgNum == 2 && <div className=" absolute w-full h-full bg-white opacity-[50%] z-40 top-0 left-0 rounded-lg"></div>}
          </div>
        <div onClick={() => { setImgNum(3)}} className={imgNum == 3 ? "relative w-16 cursor-pointer md:rounded-lg border border-orange ":"w-16 cursor-pointer md:rounded-lg"}>
          <img src={thumb3} className="rounded-lg" alt="" />
          {imgNum == 3 && <div className=" absolute w-full h-full bg-white opacity-[50%] z-40 top-0 left-0 rounded-lg"></div>}
        </div>
        <div onClick={() => { setImgNum(4)}} className={imgNum == 4 ? "relative w-16 cursor-pointer md:rounded-lg border border-orange ":"w-16 cursor-pointer md:rounded-lg"}>
          <img src={thumb4} className="rounded-lg" alt="" />
          {imgNum == 4 && <div className=" absolute w-full h-full bg-white opacity-[50%] z-40 top-0 left-0 rounded-lg"></div>}
          </div>
      </div>}
      {currentWidth < 768 && 
      <button
        id="prev"
        onClick={() => {
          imgNum == 1 ? setImgNum(4) : setImgNum(imgNum - 1);
        }}
        className="absolute top-[45%] left-[5%] bg-white z-30 w-9 h-9 rounded-full flex justify-center items-center"
      >
        <img src={prev} alt="" />
      </button>}
      {/* div appearing in the middle of the screen */}
      { currentWidth >= 768 && picMaximized > 0 && 
      <div className="fixed w-[50%] lg:w-[30%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-999">
        <div className="relative">
        <button
        id="next"
        onClick={() => {
          imgNum == 4 ? setImgNum(1) : setImgNum(imgNum + 1);
        }}
        className="absolute top-[50%] right-0 translate-x-1/2 -translate-y-full bg-white  z-30 w-10 h-10 rounded-full flex justify-center items-center"
      >
        <img src={next} alt="" />
      </button>
        <button
        id="prev"
        onClick={() => {
          imgNum == 1 ? setImgNum(4) : setImgNum(imgNum - 1);
        }}
        className="absolute top-[50%] left-0 -translate-x-1/2 -translate-y-full bg-white  z-30 w-10 h-10 rounded-full flex justify-center items-center"
      >
        <img src={prev} alt="" />
      </button>
        <span onClick={() => setPicMaximized(0)} className="text-white font-fontBold text-xl absolute -top-10 right-1 cursor-pointer">X</span>
        <div id="pro1" className="relative w-full">
        {imgNum == 1 && <img  src={pro1} alt="" className="w-full  md:min-h-[420px] md:rounded-lg"/>}
        {imgNum == 2 && <img  src={pro2} alt="" className={"w-full  md:min-h-[420px] md:rounded-lg "} />}
        {imgNum == 3 && <img  src={pro3} alt="" className={"w-full  md:min-h-[420px] md:rounded-lg "} />}
        {imgNum == 4 && <img  src={pro4} alt="" className={"w-full  md:min-h-[420px] md:rounded-lg "} />}
        </div>
        {currentWidth >= 768 && 
      <div id="thumbs" className="mt-5 flex justify-around">
        <div onClick={() => { setImgNum(1)}} className={imgNum == 1 ? " relative w-16 cursor-pointer md:rounded-lg border border-orange ":" w-16 cursor-pointer md:rounded-lg"}  >
          <img src={thumb1} alt="" className="rounded-lg" />
          {imgNum == 1 && <div className=" absolute w-full h-full bg-white opacity-[50%] z-40 top-0 left-0 rounded-lg"></div>}
        </div>

        <div onClick={() => { setImgNum(2)}} className={imgNum == 2 ? " relative w-16 cursor-pointer md:rounded-lg border border-orange ":" w-16 cursor-pointer md:rounded-lg"}>
          <img src={thumb2} className="rounded-lg" alt="" />
          {imgNum == 2 && <div className=" absolute w-full h-full bg-white opacity-[50%] z-40 top-0 left-0 rounded-lg"></div>}
          </div>
        <div onClick={() => { setImgNum(3)}} className={imgNum == 3 ? " relative w-16 cursor-pointer md:rounded-lg border border-orange ":" w-16 cursor-pointer md:rounded-lg"}>
          <img src={thumb3} className="rounded-lg" alt="" />
          {imgNum == 3 && <div className=" absolute w-full h-full bg-white opacity-[50%] z-40 top-0 left-0 rounded-lg"></div>}
        </div>
        <div onClick={() => { setImgNum(4)}} className={imgNum == 4 ? " relative w-16 cursor-pointer md:rounded-lg border border-orange ":" w-16 cursor-pointer md:rounded-lg"}>
          <img src={thumb4} className="rounded-lg" alt="" />
          {imgNum == 4 && <div className=" absolute w-full h-full bg-white opacity-[50%] z-40 top-0 left-0 rounded-lg"></div>}
          </div>
      </div>}
        </div>
      </div>}

      {/* black div under the maximized picture  */}
          {currentWidth >= 768 &&  picMaximized > 0 && <div className="fixed w-screen h-screen top-0 left-0 bg-black opacity-[75%] z-50"></div>}
    </div>
    <TextAndAddToCart  updateNum={editNum}   inCartProducts={getNumberInCart} />
    </div>
    
  );
};

export default ImageSlider;
