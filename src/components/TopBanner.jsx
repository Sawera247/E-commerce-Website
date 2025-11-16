import React from 'react'
import './TopBanner.css'
import { Link } from 'react-router-dom'

const TopBanner = () => {
  return (
    <nav className="top-banner bg-black text-white text-center p-3">
        <p className='font-light text-xs sm:text-sm md:text-base'>Summer Sale And Free Express Delivery - OFF 50%! <Link to={'/shop'} className='ml-1 underline font-bold'>Shop Now</Link></p>
    </nav>
  )
}

export default TopBanner