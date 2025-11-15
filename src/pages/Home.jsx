import React from 'react'
import Banner from '../components/Banner'
import TodayCards from '../components/TodayCards'
import BrowseCard from '../components/BrowseCard'
import BestSelling from '../components/BestSelling'
import Banner2 from '../components/Banner2'
import Explore from '../components/Explore'
import Trust from '../components/Trust'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Banner/> 
      <TodayCards/> 
      <BrowseCard/>
      <BestSelling/>
      <Banner2/> 
      <Explore/>
      <Trust/>
      <Footer/>
    </div>
  )
}

export default Home
