import React, { useEffect, useState } from 'react'

const Banner2 = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    let targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 23);
    targetDate.setHours(23, 59, 59, 999); 

    const interval = setInterval(() => {
      const now = new Date();
      let diff = targetDate - now;

      if (diff <= 0) {
        targetDate.setDate(targetDate.getDate() + 23);
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
    <div>
        <div className="banner 
                      bg-black text-white 
                      py-15 sm:py-6
                      px-6 sm:px-10 
                      rounded-lg 
                      w-full sm:w-[95%] 
                      mx-auto mt-6 sm:mt-10
                      flex flex-col sm:flex-row 
                      items-center sm:items-center 
                      justify-between 
                      leading-relaxed">
        <div className='flex flex-col gap-10 ban wrap'>
            <p className='text-[#00ef60]'>Categoies</p>
            <h1 className='text-5xl font-normal'>Enhance Your Music Experience</h1>
            <ul className='flex gap-8 text-center items-center'>
                <li className='bg-white rounded-full text-black leading-none h-15 flex flex-col w-15 text-center gap-none items-center justify-center'><span className='text-lg font-semibold'>{timeLeft.days}</span><span className='text-xs font-semibold mb-1'>Days</span></li>
                <li className='bg-white rounded-full text-black leading-none h-15 flex flex-col w-15 text-center gap-none items-center justify-center'><span className='text-lg font-semibold'>{timeLeft.hours}</span><span className='text-xs font-semibold mb-1'>Hours</span></li>
                <li className='bg-white rounded-full text-black leading-none h-15 flex flex-col w-15 text-center gap-none items-center justify-center'><span className='text-lg font-semibold'>{timeLeft.minutes}</span><span className='text-xs font-semibold mb-1'>Minutes</span></li>
                <li className='bg-white rounded-full text-black leading-none h-15 flex flex-col w-15 text-center gap-none items-center justify-center'><span className='text-lg font-semibold'>{timeLeft.seconds}</span><span className='text-xs font-semibold mb-1'>Seconds</span></li>
            </ul>
            <button className='bg-[#00ef60] p-5 w-50 text-black font-bold hover:bg-[#00cc4a] hover:cursor-pointer hover:scale-105 rounded'>Buy Now</button>
        </div>
        <div>
            <img src="/banner2.png" alt="banner2" className='w-[600px] mt-5'/>
        </div>
      </div>
    </div>
  )
}

export default Banner2