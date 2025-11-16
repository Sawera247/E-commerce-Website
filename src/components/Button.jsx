import React from 'react'

const Button = ({text}) => {
  return (
    <>
        <button className='hover:bg-[#b03030] hover:scale-103 cursor-pointer bg-[#db4444] text-white px-9 py-3 rounded banner'>{text}</button>
    </>
  )
}

export default Button