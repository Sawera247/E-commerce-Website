import React from 'react'
import { FaDollarSign, FaGift } from 'react-icons/fa'
import { FaHouseChimney, FaSackDollar } from 'react-icons/fa6'

const OurSite = () => {
  const icons = [
    { id: 1, icon: FaHouseChimney, title: '10.5k', para: 'Sellers active in our site' },
    { id: 2, icon: FaDollarSign, title: '33k', para: 'Monthly product sale' },
    { id: 3, icon: FaGift, title: '45.5k', para: 'Customers active in our site' },
    { id: 4, icon: FaSackDollar, title: '25k', para: 'Annual gross sale in our site' },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 w-11/12 sm:w-4/5 mx-auto py-10">
      {icons.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center text-center gap-4 p-6 border border-[#c1c0c1] rounded-lg hover:bg-[#db4444] hover:text-white transition-all duration-300 cursor-pointer"
        >
          <div className="text-4xl text-white bg-black w-20 h-20 sm:w-24 sm:h-24 border-4 border-[#c1c0c1] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black">
            <item.icon />
          </div>

          <p className="text-xl sm:text-2xl font-bold uppercase">{item.title}</p>
          <p className="text-xs sm:text-sm font-normal capitalize">{item.para}</p>
        </div>
      ))}
    </div>
  )
}

export default OurSite
