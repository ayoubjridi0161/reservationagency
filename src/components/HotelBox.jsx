import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import { renderStars } from '../utils/renderStarts';

const HotelBox = (props) => {
    
    const path = useLocation().pathname
  return (
    <Link to={`/hotels/${props.id}`}> 
    <div className='flex flex-col gap-2 cursor-pointer   '>
      
        <img src={props.image} className='w-full h-56 object-cover border rounded-xl'/>
        <h2 className={` hover:underline text-shadow-custom font-lalezar text-2xl text-left ${props.name?.length > 30 ? 'text-xl' : 'text-2  xl' } `}>{props.name}</h2>
        <p className='flex'>{renderStars(props.stars)}</p>
        <p className=' flex gap-2 font-semibold items-center'><span className='font-bold text-2xl '><IoLocationOutline /></span> <span >{props.location}</span></p>
    </div>
    </Link>
  )
}


export default HotelBox