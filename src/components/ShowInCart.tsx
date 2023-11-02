import thumbPic from '../assets/image-product-1-thumbnail.jpg';
import deleteIcon from '../assets/icon-delete.svg';
import { useState } from 'react';




const ShowInCart = (props:any) => { 
    const numOfProd = props.prods;
    const [empty, setEmpty] = useState(numOfProd == 0  ? 1 : 0);
    return (
        <div id="incart" className=" flex flex-col py-5 absolute md:fixed md:top-[15%] md:left-[80%] lg:left-[86%] md:w-72 md:h-60 md:shadow-xl  top-[5%] left-1/2 transform -translate-x-1/2 w-11/12 h-5/6 rounded-lg bg-white z-40">
            <div className="font-fontBold w-full px-5  pb-4 md:pb-2 border-b-0.5 border-grayish-blue">Cart</div>
            <div className="flex flex-col items-center justify-center grow pt-4 px-5">
                {empty == 1 && <p className=" text-grayish-blue text-lg font-fontBold">Your cart is empty.</p>}
                    {empty == 0 && <div className="flex items-center justify-center">
                        <img src={thumbPic} alt="" className="w-12 rounded-md mr-3 -mt-1" />
                        <div className="text text-grayish-blue mr-3">
                            <p>Fall Limited Edition Sneakers</p>
                            <p>$125.00 x <span>{numOfProd}</span> <span id="price" className="font-fontBold text-lg text-black">${numOfProd * 125}</span></p>
                        </div>
                        <img src={deleteIcon} className=' cursor-pointer' alt="" onClick={() => {setEmpty(1), props.deleteFun()}}  />
                    </div>}   
                    {empty == 0 && <button className="text-white font-fontBold mt-5 bg-orange w-full py-4 px-2 rounded-lg flex items-center justify-center cursor-pointer my-5">
                    Checkout
                </button>}
                
            </div>
                
        </div>
    );
}

export default ShowInCart ;