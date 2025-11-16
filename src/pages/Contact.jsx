import React from 'react'
import ContactForm from '../components/ContactForm'
import CallToUs from '../components/CallToUs'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
      <p className='capitalize mt-10 px-10'>home / <span className='font-semibold'>contact</span></p>
      <div className="flex flex-col lg:flex-row gap-10 mx-5 sm:mx-10 items-center justify-center py-10">
        <CallToUs />
        <ContactForm />
      </div>
    </>
  )
}

export default Contact
