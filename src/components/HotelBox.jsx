import React from 'react'
import { IoIosStar } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";

const HotelBox = (props) => {
    const renderStars = (stars) => {
        const starsArray = []
        for (let i = 0; i < stars; i++) {
            starsArray.push(<IoIosStar key={i} />)
        }
        return starsArray
    }
    const path = useLocation().pathname
    console.log(path)
  return (
    <Link to={`${path}${props.id}`}> 
    <div className='flex flex-col gap-2 cursor-pointer   '>
      
        <img src={props.image} className='w-full h-full object-cover border rounded-xl'/>
        <h2 className='hover:underline text-shadow-custom font-lalezar text-2xl text-left '>{props.hotel}</h2>
        <p className='flex'>{renderStars(props.stars)}</p>
        <p className=' flex gap-2 font-semibold items-center'><span className='font-bold text-2xl '><IoLocationOutline /></span> <span >{props.location}</span></p>
    </div>
    </Link>
  )
}


export default HotelBox