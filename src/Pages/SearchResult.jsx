import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import EmptyHotels from '../components/EmptyHotels'
import HotelPageBox from '../components/HotelPageBox'
import { getSearchResults } from '../utils/apiFunctions'

 const SearchResult = () => {
  const   params  = useParams()
  const [hotels, setHotels] = React.useState([])
    const Search = params.keyword
    useEffect(() => {
      async function fetchData (){
        const data = await getSearchResults(params.keyword)
        setHotels(data.result)
      }
      fetchData()
    },[])
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
    <section className='pt-36 h-screen '>
    <h1 >Search Result for : {Search} . . . </h1>
    <div className='grid grid-cols-3 gap-4'>
        {
          hotels.length === 0 ? 
          <div className='flex flex-wrap gap-6'>
            <EmptyHotels/>
          </div>
          : 
          hotels.map((hotel) => (
            <HotelPageBox key={hotel._id}  id={hotel._id}  name={hotel.name} location={hotel.location} stars={hotel.starRating} image={hotel.image[0]} />
          ))
}
    </div>
    </section>
  )
}

export default SearchResult