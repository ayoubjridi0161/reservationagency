import { IoLocationOutline } from 'react-icons/io5';
import { renderStars } from '../utils/renderStarts';
import { Link } from 'react-router-dom';
export const HotelBox = ({image,name,stars,location,id}) => {
    return (
      <Link to={`/hotels/${id}`} className='w-[30%] border border-[#919191] rounded-3xl shadow-lg '>
        <img src={image} alt="hotel"  className='drop-shadow-lg w-full h-52 border rounded-t-3xl'/>
        <div className='px-3 py-1 flex flex-col gap-2'>
        <h3 className='underline'>{name}</h3>
        <p className='flex'>{renderStars(stars)}</p>
        <p className='flex items-center'><IoLocationOutline /> <span>{location}</span></p>
      
        </div>
        </Link>
    )
    }