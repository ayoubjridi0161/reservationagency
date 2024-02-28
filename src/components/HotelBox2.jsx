import { IoIosStar } from "react-icons/io";
import './hotelBox2.css'
const HotelBox2 = (props) => {
    const renderStars = (stars) => {
        const starsArray = []
        for (let i = 0; i < stars; i++) {
            starsArray.push(<IoIosStar />)
        }
        return starsArray
    }
  return (
    <div className="card">
  <b></b>
  <img src={props.image} className='w-full h-full object-cover border rounded-xl'/>  <div className="content">
    <p className="title">good hotel<br></br><span className="flex">{renderStars(props.stars)}</span></p>
    
  </div>
    </div>
  )
}

export default HotelBox2