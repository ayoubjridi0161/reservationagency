import React from 'react'
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaBuildingColumns } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <section className='pt-36 pb-20 flex flex-col items-center'>
    <div className="mb-5 text-center text-blue-900 text-3xl font-normal font-['IM FELL Double Pica'] tracking-wide">Who Are We</div>
    <div className=" w-1/2 h-14 text-center text-zinc-800 text-sm font-normal font-['Hanuman']">Welcome to We Travel! We're a passionate team of travel enthusiasts dedicated to crafting unforgettable experiences. With us, you'll find personalized service, expert advice, and seamless bookings tailored to you.</div>
    <div className='flex w-full mt-10  '>
        <div className='flex flex-col gap-3  px-16 w-1/2 border border-l-black border-transparent '>
        {/*When Did We Open*/}
        <FaClockRotateLeft className=' text-blue-900 mx-auto text-3xl' />
        <div className="WhenDidWeOpen text-center text-neutral-700 text-2xl font-normal font-['Lalezar']">When Did We Open</div>
        <div className="px- w-full h-14 text-center text-zinc-800 text-sm font-normal font-['Hanuman']">Founded in the actual year, We Travel, Our commitment to excellence has made us a trusted choice for travelers seeking quality and innovation.</div>        
        </div>
        {/*Our Agencies in Tunisia*/}
        <div className='flex flex-col gap-3  px-16 w-1/2 border border-l-black border-transparent '>
        <FaBuildingColumns className='text-blue-900 mx-auto text-3xl' />
        <div className="OurAgenciesInTunisia text-center text-neutral-700 text-2xl font-normal font-['Lalezar']">Our Agencies in Tunisia</div>
        <div className=" w-full  h-32 text-center text-zinc-800 text-sm font-normal font-['Hanuman']">We Travel proudly operates five branches across Tunisia, located in Sousse, Tunis, Djerba, Monastir, and Bizerte. Each of our locations is staffed with knowledgeable experts ready to assist you in planning your perfect getaway, whether it's a beach vacation in Sousse or a cultural exploration in Tunis. With We Travel, your travel dreams are always within reach.</div>
        </div>

    </div>
    </section>
)
}

export default AboutUs