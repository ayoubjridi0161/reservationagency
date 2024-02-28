import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { searchHotels } from '../utils/apiFolder' 
import HotelBox from '../components/HotelBox'

 const SearchResult = () => {
  const   params  = useParams()
  const [hotels, setHotels] = React.useState([])
    const Search = params.keyword
  console.log(Search)
  /*useEffect(() => {
     setHotels(searchHotels(Search))


},[Search])
  function renderHotels(hotels) {
    const hotelList = hotels?.map((hotel) => {
      return (
        <HotelBox
          key={hotel.id}
          id={hotel.id}
          name={hotel.name}
          price={hotel.price}
          image={hotel.image}
        />
      )
    })
return hotelList*/
  
  return (
    <section className='pt-11 min-h-96 bg-slate-600'>
    <h1 >Search Result for : {Search} . . . </h1>
    <div className='grid grid-cols-3 gap-4'>
      hello
    </div>
    </section>
  )
}

export default SearchResult