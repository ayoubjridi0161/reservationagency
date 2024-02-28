import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=' w-full h-fit pt-14 bg-[#323232] flex flex-col-reverse items-center pb-4'>
        <div className='flex gap-3 text-4xl'>
        <FaInstagram className='text-white' />
        <FaFacebook  className='text-white'/>  
        <FaLinkedin  className='text-white'/>
        </div>
        <p className='text-2xl text-white font-lalezar'>follow us:</p>

    </footer>
  )
}

export default Footer