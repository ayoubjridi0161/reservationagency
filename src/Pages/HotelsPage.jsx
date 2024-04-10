import Pagination from '@mui/material/Pagination';
import React, { useEffect } from 'react'
import { useState, Suspense } from 'react'
import HotelBox from '../components/HotelBox'
import { IoMdSearch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { renderStars } from '../utils/renderStarts';
import { Link } from 'react-router-dom';
import { FaChevronCircleRight } from "react-icons/fa";
import { gethotels } from '../utils/apifolder2';
import Loader from '../utils/Loader';
export const HotelsPage = () => {
  const [hotels, setHotels] = useState([]);
/*const hotels = [
  {
  "name": "JAZ Tour KHALEF",
  "image": "https://www.google.com/travel/hotels/entity/CgsI_tKz_qHO5YPKARAB?ts=CAESABoWEhQSEgoHCOgPEAIYHRIHCOgPEAMYASoHCgU6A1RORA",
  "location": "Sousse, Tunisia",
  "stars": "5"
  },
  {
  "name": "Hannibal Palace",
  "image": "https://www.google.com/travel/hotels/entity/CgoIkMKh07S3-4NlEAE?ts=CAESABoWEhQSEgoHCOgPEAIYHRIHCOgPEAMYASoHCgU6A1RORA",
  "location": "Sousse, Tunisia",
  "stars": "5"
  },
  {
  "name": "Hôtel Kaiser",
  "image": "https://www.google.com/travel/hotels/entity/CgsIz4C_m_mL7YbaARAB?ts=CAESABoWEhQSEgoHCOgPEAIYHRIHCOgPEAMYASoHCgU6A1RORA",
  "location": "Sousse, Tunisia",
  "stars": "5"
  },
  {
  "name": "Hotel Marhaba Royal Salem",
  "image": "https://www.google.com/travel/hotels/entity/CgoIovGwsf68hOQ2EAE?ts=CAESABoWEhQSEgoHCOgPEAIYHRIHCOgPEAMYASoHCgU6A1RORA",
  "location": "Sousse, Tunisia",
  "stars": "5"
  },
  {
  "name": "Mövenpick Sousse",
  "image": "https://th.bing.com/th/id/R.2e1a83fa38bcb1727941275329b936f4?rik=AdvwQPIG4ENbPg&pid=ImgRaw&r=0",
  "location": "Sousse, Tunisia",
  "stars": "5"
  }
 
  ]
  function RenderFiveStars(){
    const fiveStars = hotels.filter(hotel => hotel.stars === "5")
    const [index ,setIndex] = useState(0)
    return(
      <div className='flex gap-3  '>
        {fiveStars.slice(index,index+3).map((hotel,index) => (
          <HotelBox key={index} hotel={hotel.name} location={hotel.location} stars={hotel.stars} image={hotel.image} />
        ))}
        <button className='' onClick={()=>{if(index+1===fiveStars.length){setIndex(0)}else{setIndex(index+1)}}}><FaChevronCircleRight /> </button>

      </div>
    )
  }*/
  const [filterByStars, setFilterByStars] = useState(0);
  const HotelBox = ({image,name,stars,location,id}) => {
  return (
    <Link to={`/hotels/${id}`}  className='w-[30%] h-80 border border-[#919191] drop-shadow-md rounded-3xl'>
      <img src={image} alt="hotel" style={{ }}   className='  w-full h-2/3 border rounded-t-3xl'/>
      <div className='px-3 py-1 flex flex-col gap-2'>
      <h3 className=" w-fit  text-center text-black text-base font-normal font-['Hanuman'] underline " style={{
textShadow: "3px 5px 4px rgba(38, 38, 38, 0.58)"}}>{name}</h3>
      <p className='flex'>{renderStars(stars)}</p>
      <p className='flex items-center'><IoLocationOutline /> <span>{location}</span></p>
    
      </div>
      </Link>
  )
  }
  const [maxPages, setMaxPages] = useState(1);
  //get the number of pages
  useEffect(() => {
    async function fetchData() {
      const {pages} = await gethotels(1);
      setMaxPages(pages);
    }
    fetchData();
  }, [])
  const [page, setPage] = useState(1);
  //get the hotels for the current page
  useEffect(() => {
    async function fetchData() {
      const {hotels} = await gethotels(page,filterByStars);
      setHotels(hotels);

    }
    fetchData();
  }, [page,filterByStars])
 

  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const handleFilterByStars = (event) => {
    if (event.target.checked) {
      setFilterByStars(parseInt(event.target.value));
      setPage(1);
    }
    else {
      setFilterByStars(0);
    }
  }

  return (
    <main className='flex pt-[105px] '>
      <aside className=' px-7 w-[38%] gap-4 bg-[#555555] flex flex-col items-center pt-5 pb-10  '>
        <form className='border rounded-2xl  w-full bg-[#DDDDDD] drop-shadow-sm py-2 mx-2 flex items-center'>
        <button type='submit' className='p-2 text-2xl'><IoMdSearch /></button>
          <input type="text" className=' outline-none w-3/4 bg-transparent  text-[#6d6d6d] font-halant text-[22px]' placeholder="Hotel you looking for"></input>
        </form>
        <hr className=' border-black w-full' />
        {/*Destination*/ }
        <div className='border bg-[#787878] rounded-xl self-start mx-7 border-transparent min-w-[55%] h-11 font-lato flex justify-between items-center text-white text-2xl px-3'>
          <p>Destination</p>
        </div>
        <div className='self-start px-10 flex gap-3 text-balance text-white text-xl' >
          <input type="checkbox" name="sousse" id="sousse" />
          <label htmlFor="1">Sousse</label>
        </div>
        
        <div className='self-start px-10 flex gap-3 text-balance text-white text-xl'>
          <input type="checkbox" name="tunis" id="tunis" />
          <label htmlFor="tunis">Tunis</label>
        </div>
        
        <div className='self-start px-10 flex gap-3 text-balance text-white text-xl'>
          <input type="checkbox" name="Djerba" id="Djerba" />
          <label htmlFor="Djerba">Djerba</label>
        </div>
        
        <div className='self-start px-10 flex gap-3 text-balance text-white text-xl'>
          <input type="checkbox" name="Hammamet" id="Hammamet" />
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
      <section className=' w-full bg-white m-7'>
        <Suspense fallback={<Loader/>} >
        <>
        <h1>{page}</h1>
          <div className='flex flex-wrap gap-6'>{
            hotels.map((hotel) => (
              <HotelBox key={hotel.id} id={hotel.id}  name={hotel.name} location={hotel.location} stars={hotel.stars} image={hotel.image} />
            ))
          }

          </div>
          <Pagination count={maxPages} className='mx-[25%] mt-5' page={page} onChange={handlePageChange} />
          </>
          </Suspense>
        

      </section>
    </main>
  )
}
