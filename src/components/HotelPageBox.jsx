import { IoLocationOutline } from "react-icons/io5";
import { renderStars } from '../utils/renderStarts';
import { Link } from 'react-router-dom';
const HotelPageBox = ({image,name,stars,location,id}) => {
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
    export default  HotelPageBox 