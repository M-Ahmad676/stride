import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
    
  return (
    <div className='flex items-center justify-between px-10 w-full h-[4rem] shadow-sm shadow-gray-400'>
      
      <div>
        <IoMdMenu className='text-[2rem]'/>
      </div>
      
        <div className='bg-gradient-to-r from-red-600 to-red-400 bg-clip-text'>
            <h1 className='text-[1.6rem] font-Anton italic bg-transparent'>STRIDE</h1>
        </div>

      <div className='flex items-center gap-x-5'>
       <FaShoppingCart className='text-[1.6rem] '/>

       <FaUserCircle className='text-[1.6rem]'/>
      </div>

    </div>
  )
}
