import React from "react";
import SideBar from "./SideBar";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <SideBar />

      <div className="border-l border-gray-300 mx-2 sm:mx-4"></div>

      <div className="banner 
                      bg-black text-white 
                      py-3
                      px-6 sm:px-10 
                      rounded-lg 
                      w-full sm:w-[70%] 
                      mx-auto mt-6 sm:mt-10
                      flex flex-col sm:flex-row 
                      items-center sm:items-center 
                      justify-between 
                      gap-6 sm:gap-0 
                      leading-relaxed">

        <div className="flex flex-col justify-center text-center sm:text-left">
          <p className="text-base sm:text-lg mb-2 sm:mb-4">Casual Sneakers</p>

          <p className="text-3xl sm:text-5xl font-semibold sm:w-[60%] leading-tight">
            Upto 10% OFF Voucher
          </p>

          <p className="mt-3">
            <a href="#" className="underline">Shop Now</a>
          </p>
        </div>

        <img
          src="/banner.png"
          alt="Sample Product"
          className="w-40 sm:w-80 object-contain rounded-md"
        />
      </div>
    </div>
  );
};

export default Banner;
