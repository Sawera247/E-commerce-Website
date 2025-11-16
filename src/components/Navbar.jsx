import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '../Config/Firebase';
import { ref, onValue } from 'firebase/database';
import './Navbar.css';
import TopBanner from './TopBanner';
import { Link, NavLink } from 'react-router-dom';
import Product from '../fetching data/product';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  // For search
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const allProducts = Product(); // fetch all products

  // Listen to auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Fetch cart count
  useEffect(() => {
    const cartRef = ref(db, 'cart');
    const unsubscribe = onValue(cartRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const totalCount = Object.values(data).reduce(
          (sum, item) => sum + (item.quantity || 0),
          0
        );
        setCartCount(totalCount);
      } else {
        setCartCount(0);
      }
    });

    return () => unsubscribe();
  }, []);

  // Filter products on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  }, [searchQuery, allProducts]);

  return (
    <>
      <TopBanner />
      <div className='z-50 sticky top-0 left-0'>
        <nav className="navbar px-4 md:px-8 py-4 flex justify-between items-center bg-white shadow-md w-full">
          <div className="flex items-center">
            <img src="/logo.png" alt="logo" className="h-[35px]" />
            <p className="logo uppercase font-bold"> Penguin</p>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
            <i className="fa-solid fa-bars"></i>
          </button>
          <ul
            className={`menu font-medium text-gray-700 tracking-wider md:flex md:gap-7 ${
              isMenuOpen
                ? 'flex flex-col gap-4 absolute top-full left-0 w-full bg-white shadow-md py-4 px-4'
                : 'hidden'
            }`}
          >
            <li>
              <NavLink to={'/'} onClick={() => setIsMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={'/contact'} onClick={() => setIsMenuOpen(false)}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to={'/about'} onClick={() => setIsMenuOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={'/signup'} onClick={() => setIsMenuOpen(false)}>
                Sign Up
              </NavLink>
            </li>
          </ul>

          <div className="hidden md:flex gap-7 items-center relative">
            {/* Search Bar */}
            <div className="relative w-[250px]">
              <input
                className="bg-[#f5f5f5] w-full py-1 px-2 search rounded focus:outline-none"
                type="text"
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <i className="fa-solid fa-magnifying-glass absolute right-2 top-1/2 -translate-y-1/2"></i>

              {searchResults.length > 0 && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md rounded mt-1 max-h-60 overflow-y-auto z-20">
                  {searchResults.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setSearchQuery('')}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Cart */}
            <div className="relative">
              <Link to={'/cart'}>
                <i className="fa-solid fa-cart-shopping cursor-pointer"></i>
              </Link>
              {cartCount > 0 && (
                <span className="bg-[#db4444] rounded-full text-center text-white text-[0.60rem] absolute -top-2 -right-2 w-4 h-4">
                  {cartCount}
                </span>
              )}
            </div>

            {/* User */}
            <div className="relative">
              {user && (
                <div className="relative">
                  <i
                    className="fa-solid fa-circle-user text-2xl cursor-pointer"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  ></i>

                  {isDropdownOpen && (
                    <div
                      className="hover:bg-[#db4444] hover:text-white absolute right-0 mt-2 bg-white shadow-md rounded px-4 py-2 w-32 cursor-pointer"
                      onClick={() => signOut(auth)}
                    >
                      Logout
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
