import React from 'react'

const cates = ({heading, headline}) => {
  return (
    <div className='px-10 pt-15'>
    <div className='flex gap-3 items-center'>
        <div className='border-9 border-[#db4444] rounded h-9'>  </div>
        <p className='text-[#db4444] today text-sm font-bold tracking-wide'>{heading}</p>
    </div>
    <div className='sale'>
        <p className='text-4xl font-semibold mt-5'>{headline}</p>
    </div>
    </div>
  )
}

export default cates