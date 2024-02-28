import React from 'react'
import { useState } from 'react'
import HotelBox from '../components/HotelBox'
import { FaChevronCircleRight } from "react-icons/fa";
export const HotelsPage = () => {
const hotels = [
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
  }
  return (
    <main className='flex pt-[105px] '>
      <aside className=' w-1/4 bg-blue-600'>
        yacine
      </aside>
      <section className=' w-full bg-slate-500'>
        <h1></h1>
          <div className=''>
            {RenderFiveStars()}
          </div>
      </section>
    </main>
  )
}
