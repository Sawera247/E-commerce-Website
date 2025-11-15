import React from "react";
import { BsHeadset, BsPatchCheck } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";

const Trust = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-11/12 sm:w-4/5 mx-auto py-8 sm:py-15 gap-8 sm:gap-0">
      {/* Free & Fast Delivery */}
      <div className="flex flex-col items-center text-center gap-3">
        <div className="text-4xl text-white bg-black w-20 h-20 sm:w-24 sm:h-24 border-2 sm:border-4 border-[#c1c0c1] rounded-full flex items-center justify-center">
          <TbTruckDelivery />
        </div>
        <h3 className="text-lg sm:text-xl font-bold uppercase">
          Free and Fast Delivery
        </h3>
        <p className="text-xs sm:text-sm font-semibold capitalize">
          Free delivery for all orders over $140
        </p>
      </div>

      {/* 24/7 Customer Service */}
      <div className="flex flex-col items-center text-center gap-3">
        <div className="text-4xl text-white bg-black w-20 h-20 sm:w-24 sm:h-24 border-2 sm:border-4 border-[#c1c0c1] rounded-full flex items-center justify-center">
          <BsHeadset />
        </div>
        <h3 className="text-lg sm:text-xl font-bold uppercase">
          24/7 Customer Service
        </h3>
        <p className="text-xs sm:text-sm font-semibold capitalize">
          Friendly 24/7 customer support
        </p>
      </div>

      {/* Money Back Guarantee */}
      <div className="flex flex-col items-center text-center gap-3">
        <div className="text-4xl text-white bg-black w-20 h-20 sm:w-24 sm:h-24 border-2 sm:border-4 border-[#c1c0c1] rounded-full flex items-center justify-center">
          <BsPatchCheck />
        </div>
        <h3 className="text-lg sm:text-xl font-bold uppercase">
          Money Back Guarantee
        </h3>
        <p className="text-xs sm:text-sm font-semibold capitalize">
          We return money within 30 days
        </p>
      </div>
    </div>
  );
};

export default Trust;
