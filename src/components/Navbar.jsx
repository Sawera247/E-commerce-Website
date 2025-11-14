import React, { useState } from 'react'
import './Navbar.css'
import TopBanner from './TopBanner'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
        <TopBanner/>
        <nav className="navbar px-4 md:px-8 py-4 flex justify-between items-center bg-white shadow-md sticky top-0 z-10 relative">
            <div className='flex items-center'>
                <img src="/logo.png" alt="logo" className='h-[35px]'/>
                <p className='logo uppercase font-bold'> Penguin</p>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
                <i className="fa-solid fa-bars"></i>
            </button>
            <ul className={`menu font-medium text-gray-700 tracking-wider md:flex md:gap-7 ${isMenuOpen ? 'flex flex-col gap-4 absolute top-full left-0 w-full bg-white shadow-md py-4 px-4' : 'hidden'}`}>
                <li><NavLink to={'/'} onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
                <li><NavLink to={'/contact'} onClick={() => setIsMenuOpen(false)}>Contact</NavLink></li>
                <li><NavLink to={'/about'} onClick={() => setIsMenuOpen(false)}>About</NavLink></li>
                <li><NavLink to={'/signup'} onClick={() => setIsMenuOpen(false)}>Sign Up</NavLink></li>
            </ul>
            <div className='hidden md:flex gap-7 items-center'>
              <div className='relative'>
                <input className='bg-[#f5f5f5] w-[250px] py-1 px-2 search rounded focus:outline-none' type="text" placeholder='What are you looking for?'/>
                <i className="fa-solid fa-magnifying-glass absolute right-2 top-1/2 -translate-y-1/2"></i>
              </div>
              <div className='relative'>
                <Link to={'/cart'}><i className="fa-solid fa-cart-shopping cursor-pointer"></i></Link>
                {0 > 0 && <span className='bg-[#db4444] rounded-full text-center text-white text-[0.60rem] absolute -top-2 -right-2 w-4 h-4'>0</span>}
              </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar