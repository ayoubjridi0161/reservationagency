import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getHotel } from '../utils/apiFolder'
import axios from 'axios'


export const HotelDetails = () => {
    const params = useParams()
    const [hotelDetails,sethotelDetails] = useState({})
    useEffect(()=>{
        sethotelDetails(getHotel(params.hotelID))
    },[params.hotelID])
    console.log(hotelDetails)
  return (
    <div className='flex min-h-screen items-center'>{params.hotelID}</div>

  )
}
