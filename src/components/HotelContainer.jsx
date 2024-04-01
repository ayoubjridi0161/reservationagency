import React from 'react'
import { useState } from 'react';
import { render } from 'react-dom';
import { IoIosStar } from "react-icons/io";
import Chip from '@mui/joy/Chip';
import { IoLocationOutline } from "react-icons/io5";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { IoBedOutline } from "react-icons/io5";
import { IoWifiOutline } from "react-icons/io5";
import { IoRestaurantOutline } from "react-icons/io5";
import { IoWaterOutline } from "react-icons/io5";

export default function HotelContainer({}) {

    const [fullDesc , setFullDesc] = useState(true)
    const [fullServices , setFullServices] = useState(true)
    const [hotelDetails,setHotelDetails] = React.useState({
        name :  "hotel Jaz Tour Khalef",
        image : ["https://th.bing.com/th/id/OIP.XoPWAKPsQU1ib1_fKgKeDgHaE8?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.XoPWAKPsQU1ib1_fKgKeDgHaE8?rs=1&pid=ImgDetMain",
        
        "https://th.bing.com/th/id/OIP.oKuoeU66pjnL2jp-QL1lVwHaFj?rs=1&pid=ImgDetMain"],
        starRating : 5,
        location : "sousse",
        services : ["Location", "BedRooms" , "internet" ,"Restoration" , "SwimmingPools","Activities & entertainment"],
        servicesIcons : [LiaMapMarkedAltSolid , IoBedOutline , IoWifiOutline , IoRestaurantOutline , IoWaterOutline , ],
         description : "The Jaz Tour Khalef is a 5-star hotel located in the heart of the tourist area of Sousse, 150 meters from the beach. It offers a luxurious spa and a swimming pool. The rooms at the Jaz Tour Khalef are air-conditioned and have a balcony. They are equipped with a TV, a minibar and a private bathroom. The Jaz Tour Khalef has 4 restaurants serving international and Tunisian cuisine. The hotel also has 4 bars, including a poolside bar. The Jaz Tour Khalef has a fitness center and a spa with a sauna, a hammam and a hot tub. The hotel also has a tennis court and a children's club. The Jaz Tour Khalef is 3 km from the center of Sousse and 15 km from Monastir. Free private parking is available on site."

    })
    function RenderImages(images){
        const [ bigImage , setBigImage]  = useState(images[0])
        return(
            
            <div  className='w-1/2 p-4 gap-4  items-center justify-center grid grid-cols-3 grid-rows-4 border-b border-x-zinc-700 '>
                <img src={bigImage} className="border-b-2 border-black w-full self-start border rounded-lg col-span-3 row-span-3" alt="razebbi" />
                
                <img onClick={()=>{setBigImage(images[0])}} className='hover:border-amber-700 hover:border-2 rounded-md  w-full h-full '  src={images[0]} alt="" />
                <img onClick={()=>{setBigImage(images[1])}} className='hover:border-amber-700 hover:border-2 rounded-md w-full h-full  ' src={images[1]} alt="" />
                <img onClick={()=>{setBigImage(images[2])}} className='hover:border-amber-700 hover:border-2 rounded-md  w-full h-full  ' src={images[2]} alt="" />
                
                </div>
            
        )

    }
    const renderStars = (stars) => {
        const starsArray = []
        for (let i = 0; i < stars; i++) {
            starsArray.push(<IoIosStar style={{textShadow : "1px 1px 2px black"}} key={i} />)
        }
        return starsArray
    }

    function renderDesc(desc)
    
    {
        let description = ""
        if (desc.length > 250) {
            description =  desc.slice(0,250) + " ... "

        }
        return (
            <p>{description} <button className='font-bold underline' onClick={()=>{setFullDesc(false)}}><a href='#fulldesc'
            >see more</a></button></p>
        )
    }
    function renderservices(services){
        let servicesArray = []
        for (let i = 0; i < services.length; i++) {
            servicesArray.push(<Chip key={i} lonClick={function(){}}
            size="lg"
            color='neutral'
            variant="outlined"
            > {services[i]} </Chip>)
        }
        return servicesArray
    }
  return (
    <>
    <section className='mx-auto my-10  p-5 flex flex-col  w-4/5 min-h-2/3 bg-slate-200 shadow-lg shadow-slate-400 border rounded-lg' >
        <h2 className='px-4 flex gap-4'>
            <p className='text-[28px] font-halant   ' style={{textShadow : "1px 1px 2px black"}}>{hotelDetails.name}</p> 
            <span className='items-center flex '>{renderStars(hotelDetails.starRating)}</span>
        </h2>
        <div className='px-6 flex items-center gap-2 text-xl'><IoLocationOutline />
        <p className='text-[#4C4C4C] font-halant text-[20px]'>{hotelDetails.location}</p>
        </div>
        <div className='flex gap-4 '>
            {RenderImages(hotelDetails.image)}
            <div className='w-1/2 flex flex-col gap-4'> 
            
                <div className='pt-3'>
                <h3 className='font-semibold font-sans text-[18px]' >about the hotel : </h3>
                <p className='text-wrap text-[#4A4A4A] font-kota text-[17px]'>{renderDesc(hotelDetails.description)}</p>
                </div>          
                <div>
                <h3 className='font-semibold font-sans text-[18px]' >services:</h3>
                <div className='mt-3 flex flex-wrap gap-3 text-[16px] '>
                {renderservices(hotelDetails.services)} 
                <button onClick={()=>{setFullServices(false)}}  className='underline font-bold text-[17px] font-kota text-[#4A4A4A]' ><a href="#fullServices">see more...</a></button>
                </div>
                </div>
            
                <button className='bg-[#00FF57] w-fit place-self-center my-8 drop-shadow-md font-lalezar text-white text-3xl text-nowrap  p-3 border rounded-3xl'>Proceed to payment</button>
            </div>


        </div>

        

    </section>
    {
        !fullDesc && 
        <section id='fulldesc' className='mx-auto my-10  p-5 flex flex-col  w-4/5 min-h-2/3 bg-slate-200 shadow-lg shadow-slate-400 border rounded-lg'>
            
            {hotelDetails.description}
        </section>
    }
    {
        !fullServices &&
        <section id='fullServices' className='mx-auto my-10  p-5 flex flex-col  w-4/5 min-h-2/3 bg-slate-200 shadow-lg shadow-slate-400 border rounded-lg'>
            
            {renderservices(hotelDetails.services)}
        </section>

    }
    </>
    )
}
