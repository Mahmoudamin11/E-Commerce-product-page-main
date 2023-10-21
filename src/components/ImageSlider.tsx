import { useState } from "react";
import pro1 from "../assets/image-product-1.jpg";
import pro2 from "../assets/image-product-2.jpg";
import pro3 from "../assets/image-product-3.jpg";
import pro4 from "../assets/image-product-4.jpg";
import next from "../assets/icon-next.svg";
import prev from "../assets/icon-previous.svg";

const ImageSlider = () => {
  const [imgNum, setImgNum] = useState(1);
  return (
    <div className="relative h-[37%] overflow-y-hidden">
      <button
        id="next"
        onClick={() => {
          imgNum == 4 ? setImgNum(1) : setImgNum(imgNum + 1);
        }}
        className=" absolute top-[45%] right-[5%] bg-white z-999 w-9 h-9 rounded-full flex justify-center items-center"
      >
        <img src={next} alt="" />
      </button>
      <div id="pro1" className="relative w-full">
        {imgNum == 1 && <img src={pro1} alt="" className="-z-50 w-full" />}
        {imgNum == 2 && <img src={pro2} alt="" className="-z-50 w-full " />}
        {imgNum == 3 && <img src={pro3} alt="" className="-z-50 w-full " />}
        {imgNum == 4 && <img src={pro4} alt="" className="-z-50 w-full " />}
      </div>
      <button
        id="prev"
        onClick={() => {
          imgNum == 1 ? setImgNum(4) : setImgNum(imgNum - 1);
        }}
        className="absolute top-[45%] left-[5%] bg-white z-999 w-9 h-9 rounded-full flex justify-center items-center"
      >
        <img src={prev} alt="" />
      </button>
    </div>
  );
};

export default ImageSlider;
