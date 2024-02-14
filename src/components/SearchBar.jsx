import React from 'react'
import { FaSearch } from "react-icons/fa";


const SearchBar = () => {
  return (
    <div className='px-5 bg-[#EDEDED] bg-opacity-90 h-20  border rounded-full w-7/12'>
    <form className='flex gap-2 items-center justify-between  '>
        <FaSearch  className=' text-4xl text-white'/>
        <input type="text" placeholder='Hotel name or destination' className="w-full appearance-none bg-transparent border border-transparent rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        <button className='drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-blue-300 w-32  rounded-full'><span className=' drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-gurajada'>find hotels</span></button>
    </form>
    </div>
  )
}

export default SearchBar