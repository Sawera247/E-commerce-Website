import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <ul
      className="
        sidebar
        flex flex-row md:flex-col   
        flex-wrap                
        gap-3 sm:gap-4 md:gap-8
        p-2 sm:p-3 md:p-10
        text-xs sm:text-sm md:text-lg
        font-medium text-gray-800 tracking-wide
        md:min-w-[200px]
        overflow-x-auto
      "
    >
      <li className="break-words"><Link to="/category">Electronics & Gadgets</Link></li>
      <li className="break-words"><Link to="/category">Fashion & Apparel</Link></li>
      <li className="break-words"><Link to="/category">Beauty & Personal Care</Link></li>
      <li className="break-words"><Link to="/category">Home & Kitchen</Link></li>
      <li className="break-words"><Link to="/category">Health & Fitness</Link></li>
    </ul>
  )
}

export default SideBar
