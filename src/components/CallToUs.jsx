import React from 'react'
import { MdCall, MdEmail } from 'react-icons/md'

const CallToUs = () => {
  return (
    <div className='flex flex-col gap-5 shadow-lg p-4 sm:p-10 banner w-full max-w-md'>
        <div className='flex gap-3 items-center'>
        <p className='bg-[#db4444] rounded-full text-white w-7 h-7 flex items-center justify-center'><MdCall /></p>
        <p className='font-semibold'>Call To Us</p>
      </div>
      <p>We are available 24/7, 7 days a week.</p>
      <p>Phone: +000 000 000</p>
      <div className='border border-[#afafaf] my-3'></div>
      <div className='flex gap-3 items-center'>
        <p className='bg-[#db4444] rounded-full text-white w-7 h-7 flex items-center justify-center'><MdEmail /></p>
        <p className='font-semibold'>Write To Us</p>
      </div>
      <p>Fill out our form and we will contact you within 24 hours.</p>
      <p>Email: customer@pengiun.com</p>
      <p>Email: support@pengiun.com</p>
    </div>
  )
}

export default CallToUs