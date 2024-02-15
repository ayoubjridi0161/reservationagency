import React from 'react'
import { IoIosStar } from "react-icons/io";

const HotelBox = (props) => {
    const renderStars = (stars) => {
        let starsArray = []
        for (let i = 0; i < stars; i++) {
            starsArray.push(<IoIosStar />)
        }
        return starsArray
    }
  return (
    <div className='flex flex-col gap-2  '>
        <img src={props.image} className='w-full h-full object-cover border rounded-xl'/>
        <h2 className='font-lalezar text-2xl text-left '>{props.hotel}</h2>
        <p className='flex'>{renderStars(props.stars)}</p>
        <p className=''></p>


    </div>
  )
}

export default HotelBox