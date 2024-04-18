import React from 'react'
import { renderStars } from '../utils/renderStarts'
import { IoLocationOutline } from "react-icons/io5";
import './EmptyHotels.css'

const EmptyHotels = () => {
    const EmptyHotel = () => {
        return (<div className="card">
        <div className="card_load"></div>
        <div className="card_load_extreme_title"></div>
        <div className="card_load_extreme_descripion"></div>
    </div>
        )}
        const arr =  Array.from({ length: 6 }, () => EmptyHotel)
        
  return (
    <>
    {arr.map((EmptyHotel,index) => (
        <EmptyHotel key={index}/>
    ))}
    </>
  )
}

export default EmptyHotels