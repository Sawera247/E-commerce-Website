import React, { useState, useEffect } from "react";

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    let targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    targetDate.setHours(23, 59, 59, 999);

    const interval = setInterval(() => {
      const now = new Date();
      let diff = targetDate - now;

      if (diff <= 0) {
        targetDate.setDate(targetDate.getDate() + 3);
        targetDate.setHours(23, 59, 59, 999);
        diff = targetDate - now;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 sm:px-10 pt-8 sm:pt-15">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="border-8 sm:border-4 border-[#db4444] rounded h-6 sm:h-9"></div>
        <p className="text-[#db4444] text-sm sm:text-base font-bold tracking-wide">
          Today's
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:gap-10">
        <p className="text-3xl sm:text-4xl font-semibold my-4">Flash Sales</p>

        <ul className="flex flex-wrap sm:flex-nowrap text-xl sm:text-4xl gap-3 sm:gap-6 font-bold sm:mt-1 items-center my-4">
          <li className="flex flex-col items-center">
            <span className="text-xs sm:text-sm font-semibold">Days</span>
            {timeLeft.days}
          </li>
          <li className="mt-1 sm:mt-8 text-[#db4444]">:</li>
          <li className="flex flex-col items-center">
            <span className="text-xs sm:text-sm font-semibold">Hours</span>
            {timeLeft.hours}
          </li>
          <li className="mt-1 sm:mt-8 text-[#db4444]">:</li>
          <li className="flex flex-col items-center">
            <span className="text-xs sm:text-sm font-semibold">Minutes</span>
            {timeLeft.minutes}
          </li>
          <li className="mt-1 sm:mt-8 text-[#db4444]">:</li>
          <li className="flex flex-col items-center">
            <span className="text-xs sm:text-sm font-semibold">Seconds</span>
            {timeLeft.seconds}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FlashSale;
