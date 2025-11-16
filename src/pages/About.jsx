import Staff from '../components/Staff'
import OurSite from '../components/OurSite'
import OurStory from '../components/OurStory'
import React from 'react'
import Trust from '../components/Trust'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <p className='capitalize mt-10 px-10'>home / <span className='font-semibold'>about</span></p>
      <OurStory/>
      <OurSite/>
      <Staff/>
      <br />
      <Trust/>
      <br />
      <br />
    </div>
  )
}

export default About
