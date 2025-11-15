import React from 'react'
import './BrowseCard.css'
import Cates from './Cates'
import { BsSmartwatch, BsController, BsTelephone, BsHeadphones, BsCamera, BsLaptop } from 'react-icons/bs'

const BrowseCard = () => {
    const cardIcons = [
        {id: 1, icon: <BsTelephone />, title: 'Phones'},
        {id: 2, icon: <BsLaptop />, title: 'Computers'},
        {id: 3, icon: <BsSmartwatch />, title: 'Smartwatch'},
        {id: 4, icon: <BsCamera />, title: 'Camera'},
        {id: 5, icon: <BsHeadphones />, title: 'Headphones'},
        {id: 6, icon: <BsController />, title: 'Gaming'},
    ]
  return (
    <div>
        <Cates heading={'Categories'} headline={'Browse By Category'}/>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-10 p-10">
            {cardIcons.map((icon) => (
            <div className='hover:cursor-pointer hover:scale-[1.02] hover:bg-[#db4444] hover:text-white transition-transform duration-300'>
          <div className="border border-[#f5f5f5] py-6 px-4 rounded shadow flex flex-col items-center justify-center">
            <div className="text-4xl mb-2">
              {icon.icon}
            </div>
            <h2 className="font-semibold mt-2">{icon.title}</h2>
          </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default BrowseCard