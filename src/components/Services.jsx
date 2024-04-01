import React from 'react'
import { TiTick } from "react-icons/ti";
import { TfiMapAlt } from "react-icons/tfi";
import { FaBed } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { GiCheckMark } from "react-icons/gi";
import { MdOutlineRoomService } from "react-icons/md";
import { GrYoga } from "react-icons/gr";



export default function Services() {

    const services = [
        {
            "service" : "location",
            "text" : ["close to the beach"],
            "icon" : <TfiMapAlt/>
        }
        ,{
            "service" : "Bedrooms",
            "text" : ["Air conditioning", "TV", "Bathroom with shower" , "minibar"]
            ,"icon" : <FaBed/>

        },{
            "service" : "Restauration",
            "text" : ["Breakfast", "Lunch", "Dinner","snack-bar"]
            ,"icon" : <GiForkKnifeSpoon/>
        }
        ,{
            "service" : "internet",
            "text" : ["Free! Wi-Fi is available in all areas and is free of charge."]
            ,"icon" : <FaWifi/>
        },
        {
            "service" : "Equipement",
            "text" : ["Outdoor pool", "Garden", "Terrace", "Gym","Room Services"]
            ,"icon" : <MdOutlineRoomService/>
        },{
            "service" : "Activities",
            "text" : ["Tennis court", "Golf course (within 3 km)" , "Swimming pools"]
            ,"icon" : <GrYoga/>
        }
    ];
    const SingleService = ({service,children,text}) => {
        function renderText(text){
            const array = []
            text?.map((t,index) => {
                array.push(<p className='flex items-center gap-1 ' key={index}><GiCheckMark className='text-2xl' /> <span className='text-md'>{t}</span></p>)
            })
            return array
        }
        return(
        <div className='p-3 flex flex-col gap-5'>
        <div className='flex gap-5 text-3xl'>
            {children  }
            <p className='text-2xl'>{service}</p>
        </div>
        <div className='flex gap-7 pl-4'>
            {renderText(text)}
        </div>
        </div>)
    }


  return (
    <section id='fulldesc' className='mx-auto my-10  p-5 flex flex-col  w-4/5 min-h-2/3 bg-slate-200 shadow-lg shadow-slate-400 border rounded-lg'>
        <h2 className='text-3xl'>Services :</h2>
        <div>
             {services.map((item, index) => {
                 return <SingleService key={index} service={item.service} text={item.text}>{item.icon}</SingleService>  
             })
            }
        </div>


    </section>

    )
}
