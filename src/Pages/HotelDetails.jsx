import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoIosStar } from "react-icons/io";
import { HotelBox } from '../components/HotelBoxV2';
import Chip from '@mui/joy/Chip';
import { useQuery } from "react-query";
import { IoLocationOutline } from "react-icons/io5";
import Services from '../components/Services.jsx';
import { getHotelDetails , getSuggestedHotels } from '../utils/apifolder2.js';
import Loader from '../utils/Loader.jsx';
export const HotelDetails = () => {
    const [suggested,setSuggested] = useState()

    const {id} = useParams();
    const [fullDesc , setFullDesc] = useState(true)
    const [fullServices , setFullServices] = useState(true)
    useEffect(() => { 
        async function fetchData() {
            const data = await getSuggestedHotels();
            setSuggested(data)
        }
        fetchData()
    }, [])
    
    console.log('suggested',suggested)
    const {isLoading , error , data} = useQuery('hotelDetails',async () => await getHotelDetails(id));
    

    function RenderImages({images}){
        const [b, setB] = useState(images[0])

        return(
            <div className='w-1/2 p-4 gap-4  items-center h-[530px]  justify-center grid grid-cols-3 grid-rows-4 border-b border-x-zinc-700 '>
                <img src={b} className="border-b-2 border-black w-full h-full self-start border rounded-lg col-span-3 row-span-3" alt="razebbi" />
                <img  onClick={()=>{setB(images[0])} } className='hover:border-amber-700 hover:border-2 rounded-xl hover:scale-110 ease-in duration-300  w-full h-full '  src={images[0]} alt="" />
                <img  onClick={()=>{setB(images[1])} } className='hover:border-amber-700 hover:border-2 rounded-xl hover:scale-110 ease-in duration-300 w-full h-full  ' src={images[1]} alt="" />
                <img  onClick={()=>{setB(images[2])} } className='hover:border-amber-700 hover:border-2 rounded-xl hover:scale-110 ease-in duration-300  w-full h-full  ' src={images[2]} alt="" />
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
        for (let i = 0; i < services?.length; i++) {
            servicesArray.push(<Chip key={i} lonClick={function(){}}
            size="lg"
            color='neutral'
            variant="outlined"
            > {services[i]} </Chip>)
        }
        return servicesArray
    }
    if (isLoading) return <div className='h-screen w-screen grid place-items-center'><Loader/></div>

  return (  
    <main className='pb-6'>
        <div className='min-h-36'></div> 
        <section className='mx-auto    p-5 flex flex-col  w-4/5 min-h-2/3 bg-slate-200 shadow-lg shadow-slate-400 border rounded-lg' >
        <h2 className='px-4 flex gap-4'>
            <p className='text-[28px] font-halant   ' style={{textShadow : "1px 1px 2px black"}}>{data.name}</p> 
            <span className='items-center flex '>{renderStars(data.starRating)}</span>
        </h2>
        <div className='px-6 flex items-center gap-2 text-xl'><IoLocationOutline />
        <p className='text-[#4C4C4C] font-halant text-[20px]'>{data.location}</p>
        </div>
        <div className='flex gap-4 '>
            <RenderImages images={data.images}/>
            <div className='w-1/2 flex flex-col gap-4'> 
            
                <div className='pt-3'>
                <h3 className='font-semibold font-sans text-[18px]' >about the hotel : </h3>
                <p className='text-wrap text-[#4A4A4A] font-kota text-[17px]'>{data.description}</p>
                </div>          
                <div>
                <h3 className='font-semibold font-sans text-[18px]' >services:</h3>
                <div className='mt-3 flex flex-wrap gap-3 text-[16px] '>
                {renderservices(data.services)} 
                <button onClick={()=>{setFullServices(false)}}  className='underline font-bold text-[17px] font-kota text-[#4A4A4A]' ><a href="#fullServices">see more...</a></button>
                </div>
                </div>
            
                <Link to="Checkout"  className='bg-[#00FF57] w-fit place-self-center my-8 drop-shadow-md font-lalezar text-white text-3xl text-nowrap  p-3 border rounded-3xl'>Proceed to payment</Link>
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
           
              <Services />

    } 
    {
                <section id='hotels' className='mx-auto my-10  p-5 flex flex-col  w-4/5 min-h-2/3 bg-slate-200 shadow-lg shadow-slate-400 border rounded-lg'>
                    <h2 className='text-3xl mb-5 pl-1'>You may also Like :</h2>
                    <div className='flex gap-4'>
                        {suggested?.map(hotel => {
                            return <HotelBox key={hotel.id} image={hotel.image} name={hotel.name} stars={Math.ceil(hotel.stars) } location={hotel.location} id={hotel.id} />
                        })}
                    </div>
                </section>

    }
    </main>
    
)
}

