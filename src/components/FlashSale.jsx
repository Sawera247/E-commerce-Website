import React, { useState, useEffect } from 'react'
import './FlashSale.css'

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    let targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    targetDate.setHours(23, 59, 59, 999); // End of the day 3 days from now

    const interval = setInterval(() => {
      const now = new Date();
      let diff = targetDate - now;

      if (diff <= 0) {
        // Reset to end of the day 3 days from now
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
    <div className='px-10 py-15'>
    <div className='flex gap-3 items-center'>
        <div className='border-9 border-[#db4444] rounded h-9'>  </div>
        <p className='text-[#db4444] today text-sm font-bold tracking-wide'>Today's</p>
    </div>
    <div className='flex gap-15 items-center sale'>
        <p className='text-4xl font-semibold mt-11'>Flash Sales</p>
            <ul className='flex text-4xl gap-6 font-bold mt-1 ml-1 items-center'>
                <li><span className='text-xs font-semibold'>Days</span><br />{timeLeft.days}</li>
                <li className='mt-8 text-[#db4444]'>:</li>
                <li><span className='text-xs font-semibold'>Hours</span><br />{timeLeft.hours}</li>
                <li className='mt-8 text-[#db4444]'>:</li>
                <li><span className='text-xs font-semibold'>Minutes</span><br />{timeLeft.minutes}</li>
                <li className='mt-8 text-[#db4444]'>:</li>
                <li><span className='text-xs font-semibold'>Seconds</span><br />{timeLeft.seconds}</li>
            </ul>
    </div>
    </div>
  )
}

export default FlashSale