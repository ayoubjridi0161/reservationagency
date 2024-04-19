import Pagination from '@mui/material/Pagination';
import React, { useEffect } from 'react'
import { useState, Suspense } from 'react'
import EmptyHotels from '../components/EmptyHotels';
import { IoMdSearch } from "react-icons/io";
//import { gethotels } from '../utils/apifolder2';
import { getHotels } from '../utils/apiFunctions';
import { useNavigate } from 'react-router-dom';
import HotelPageBox from '../components/HotelPageBox';
import Loader from '../utils/Loader';
export  default function  HotelsPage(){
  const [hotels, setHotels] = useState([]);
  // const HotelPageBox = React.lazy(() => import('../components/HotelPageBox'));
  const [filterByStars, setFilterByStars] = useState([]);
  const [filterByDestination, setFilterByDestination] = useState([]);
  const [maxPages, setMaxPages] = useState(1);
  const [page, setPage] = useState(1);
  //get the hotels for the current page
  useEffect(() => {
    async function fetchData() {
      const data = await getHotels(page,filterByStars,filterByDestination);
      setMaxPages(data.totalPages)
      setHotels(data.result)
      console.log(data)
    }
    fetchData();
  }, [page,filterByStars,filterByDestination])
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const handleFilterByStars = (event) => {
    if (event.target.checked) {
      setFilterByStars(filterByStars => [...filterByStars, event.target.value]);
      setPage(1);
    }
    else {
      setFilterByStars(filterByStars => filterByStars.filter(star => star !== event.target.value));
      setPage(1);
    }
  }
  const handleFilterByDestination = (event) => {
    if (event.target.checked) {
      setFilterByDestination(filterByDestination => [...filterByDestination, event.target.value]);
      setPage(1);
    }
    else {
      setFilterByDestination(filterByDestination => filterByDestination.filter(loc => loc !== event.target.value));
      setPage(1);
    }
  }
  let navigate = useNavigate();
  const myRef = React.useRef(null);
  const submitSearch = (event) => {
    event.preventDefault();
    console.log()
    navigate(`/search/${myRef.current.value}`)
    

  }

  return (
    <main className='flex pt-[105px] '>
      <aside className=' px-7 w-[38%] gap-4 bg-[#555555] flex flex-col items-center pt-5 pb-10  '>
        <form onSubmit={submitSearch} className='border rounded-2xl  w-full bg-[#DDDDDD] drop-shadow-sm py-2 mx-2 flex items-center'>
        <button type='submit' className='p-2 text-2xl'><IoMdSearch /></button>
          <input type="text" ref={myRef} onChange={()=> myRef.current.focus} className=' outline-none w-3/4 bg-transparent  text-[#6d6d6d] font-halant text-[22px]' placeholder="Hotel you looking for"></input>
        </form>
        <hr className=' border-black w-full' />
        {/*Destination*/ }
        <div className='border bg-[#787878] rounded-xl self-start mx-7 border-transparent min-w-[55%] h-11 font-lato flex justify-between items-center text-white text-2xl px-3'>
          <p>Destination</p>
        </div>
        <div className='self-start px-10 flex gap-3 text-balance text-white text-xl' >
          <input type="checkbox" onChange={handleFilterByDestination} name="sousse" id="sousse" value="Sousse" />
          <label htmlFor="1">Sousse</label>
        </div>
        
        <div className='self-start px-10 flex gap-3 text-balance text-white text-xl'>
          <input type="checkbox" onChange={handleFilterByDestination} name="tunis" id="tunis" value="Tunis" />
          <label htmlFor="tunis">Tunis</label>
        </div>
        
        <div className='self-start px-10 flex gap-3 text-balance text-white text-xl'>
          <input type="checkbox" onChange={handleFilterByDestination} name="Djerba" id="Djerba" value="Djerba" />
          <label htmlFor="Djerba">Djerba</label>
        </div>
        
        <div className='self-start px-10 flex gap-3 text-balance text-white text-xl'>
          <input type="checkbox" onChange={handleFilterByDestination} name="Hammamet" id="Hammamet" value="Hammamet" />
          <label htmlFor="Hammamet">Hammamet</label>
        </div>
        {/*Stars*/}
        <div className='border bg-[#787878] rounded-xl self-start mx-7 border-transparent min-w-[55%] h-11 font-lato flex justify-between items-center text-white text-2xl px-3'>
          <p>Rating</p>
        </div>

        <div className='self-start px-10 flex gap-3 text-balance text-white text-xl'>
          <input type="checkbox" name="five" value={5} id="5s"  onChange={handleFilterByStars} />
          <label htmlFor="5s">5 Stars</label>
        </div>
        <div className='self-start px-10 flex gap-3 text-balance text-white text-xl'>
          <input type="checkbox" name="five"  onChange={handleFilterByStars} value={4} id="4s" />
          <label htmlFor="4s">4 Stars</label>
        </div>
        <div className='self-start px-10 flex gap-3 text-balance text-white text-xl'>
          <input type="checkbox" name="five" id="3s"  onChange={handleFilterByStars} value={3} />
          <label htmlFor="3s">3 Stars</label>
        </div>
      </aside>
      {/*Hotels*/}
      <section className=' w-full justify-between bg-white m-7 flex flex-col'>
          
          { hotels.length === 0 ? 
          <div className='flex flex-wrap gap-6'>
            <EmptyHotels/>
          </div>

          :
          <>
          <div className='flex flex-wrap gap-6'>{
            hotels.map((hotel) => (
              <HotelPageBox key={hotel._id}  id={hotel._id}  name={hotel.name} location={hotel.location} stars={hotel.starRating} image={hotel.image[0]} />
            ))
          }
        
          </div>
          
          <Pagination  count={maxPages} className='mx-[25%] mt-5' page={page} onChange={handlePageChange} />
          </>
        }
          


      </section>
    </main>
  )
}
