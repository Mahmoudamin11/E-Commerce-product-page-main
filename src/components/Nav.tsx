import menu from "../assets/icon-menu.svg";
import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import person from "../assets/image-avatar.png";
import close from '../assets/icon-close.svg';
import {useState} from 'react';
import ImageSlider from "./ImageSlider";

const Nav = () => {
  const [menuState, setMenuState] = useState(0);
  const [cartState, setCartState] = useState(0);
  const [numberInCart, setNumberInCart] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => { 
    setCurrentWidth(window.innerWidth)
  })
  const getNumber = (n:number) => { 
    setNumberInCart(n);
  }
  return (
    <>
    <nav className="p-5  z-999 md:py-12 md:pb-0 md:px-8  min-[1280px]:px-36">
      <div className="flex justify-between md:border-b md:border-b-grayish-blue">
        <div className="flex items-center">
          {currentWidth < 768 && <img src={menu} alt="menu-icon" onClick={() => setMenuState(1)} className="w-5 h-5 cursor-pointer" />}
          <img src={logo} alt="logo" className="w-full ml-4 md:ml-0 md:mr-7 md:pb-12" />
          {(menuState == 1 || currentWidth >= 768) &&  
          <div>
              {currentWidth < 768 && <div className='w-full h-full bg-black opacity-75% fixed top-0 left-0 z-50'></div>}
              <div id='menu' className=" max-[768px]:w-2/3 max-[768px]:bg-white max-[768px]:h-full  max-[768px]:fixed max-[768px]:top-0 max-[768px]:-left-0 max-[768px]:z-999 max-[768px]:p-8">
                  {currentWidth < 768 &&  <img src={close} alt="" onClick={() => setMenuState(0)} className='mb-10 cursor-pointer' />}
                  <div className="flex flex-col md:flex-row">
                    <span className="text-black md:text-dark-grayish-blue md:font-fontNormal font-fontBold max-[768px]:mb-5 md:mr-3 text-lg md:text-[15px] cursor-pointer md:pb-12 hover:text-black  hover:border-b-2 hover:border-b-orange transition-all duration-150">Collections</span>
                    <span className="text-black md:text-dark-grayish-blue md:font-fontNormal font-fontBold max-[768px]:mb-5 md:mr-3 text-lg md:text-[15px] cursor-pointer md:pb-12 hover:text-black  hover:border-b-2 hover:border-b-orange transition-all duration-150">Men</span>
                    <span className="text-black md:text-dark-grayish-blue md:font-fontNormal font-fontBold max-[768px]:mb-5 md:mr-3 text-lg md:text-[15px] cursor-pointer md:pb-12 hover:text-black  hover:border-b-2 hover:border-b-orange transition-all duration-150">Women</span>
                    <span className="text-black md:text-dark-grayish-blue md:font-fontNormal font-fontBold max-[768px]:mb-5 md:mr-3 text-lg md:text-[15px] cursor-pointer md:pb-12 hover:text-black  hover:border-b-2 hover:border-b-orange transition-all duration-150">About</span>
                    <span className="text-black md:text-dark-grayish-blue md:font-fontNormal font-fontBold max-[768px]:mb-5 md:mr-3 text-lg md:text-[15px] cursor-pointer md:pb-12 hover:text-black  hover:border-b-2 hover:border-b-orange transition-all duration-150">Contact</span>
                  </div>
              </div>
          </div>}
        </div>
        <div className="flex items-center md:pb-9">
          <div className="relative" onClick={() => {cartState == 0 ? setCartState(1) : setCartState(0)}}>
            <img src={cart} alt="cart" className="w-5 h-5 cursor-pointer md:mr-8 " />
            {numberInCart > 0 && <span className="cursor-pointer absolute bg-orange w-5 h-3 top-0 right-0 md:right-8 transform -translate-y-1/4 translate-x-1/4 rounded-full text-white text-[10px] flex items-center pt-[2px] justify-center">{numberInCart}</span>}
          </div>
          <img src={person} alt="person" className="w-8 h-8 md:w-10 md:h-10 cursor-pointer ml-4 rounded-full hover:border hover:border-orange transition-all duration-150" />
        </div>
      </div>
    </nav>

    
        <ImageSlider  state={cartState} sender={getNumber}/>
    </>
  );
};

export default Nav;
