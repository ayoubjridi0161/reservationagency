import React from 'react'
import { HeaderSearchBar } from './HeaderSearchBar'
import { useLocation  } from 'react-router-dom'

import { Link } from 'react-router-dom'
const Header  = ()  => {
  const location = useLocation().pathname
  console.log('current path',location)
  return (
    
    <header className='h-[105px] z-20 px-10 items-center flex justify-between fixed bg-opacity-95 backdrop-blur-sm  bg-stone-700 w-screen '>
        <div className='bg-blue flex gap-8'>
        <h1 className='text-[#78E4FB]  font-hurricane text-6xl '>WeTravel</h1>
        {/* location != '/' &&
        <HeaderSearchBar />
        */
      }
        </div>
        <div className='flex text-[22px]'>  
        <Link to={`/`} className='px-4 hover:underline text-white border-white border-r' >Home </Link>
        <Link to={`/hotels`} className='px-4 hover:underline text-white ' >Hotels </Link>
        <Link to={`/aboutus`} className='px-4 hover:underline text-white border-l border-white' >About Us </Link>
        </div>
    </header>
    )
}

export default  Header ;