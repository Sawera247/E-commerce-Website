import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import About from './pages/About'
import Cart from './pages/Cart'
import Category from './pages/Category'
import Product from './pages/Products'
import Shop from './pages/Shop'
import Checkout from './pages/CheckOut'
import Footer from './components/Footer'
import Final from './pages/Final'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/final" element={<Final />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
