import React from 'react'

const input = ({text, type}) => {
  return (
    <>
    <input type={type} placeholder={text} className='bg-[#f5f5f5] p-3 w-60 rounded placeholder:text-[#bfbfbf] outline-none'/>
    </>
  )
}

export default input