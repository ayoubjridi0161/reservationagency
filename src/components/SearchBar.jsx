import React, { useRef } from 'react'
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const SearchBar = () => {
  const [query, setQuery] = React.useState('')
  let navigate = useNavigate();

  const SubmitSearch = (event) => {
    event.preventDefault();
    console.log(query)
    navigate(`/hotels/?keyword=${query}`)
    

  }

  return (
    <form onSubmit={SubmitSearch} className='w-7/12' >
        <div className='flex gap-4 items-center  px-5 bg-[#EDEDED] bg-opacity-90 h-20  border rounded-full '>
        <FaSearch  className=' text-4xl text-black'/>
        <input name='query' type="text"  onChange={(e) => setQuery(e.target.value)}
          placeholder='Hotel name or destination' className="w-full appearance-none bg-transparent border border-transparent rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        <button type='submit' className='flex items-center justify-center object-scale-down my-3 box-border drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-blue-300 w-32 h-10 rounded-full'>
        <span className='drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-gurajada text-2xl'>find hotels</span>
        </button>
        </div>
    </form>
  )
}

export default SearchBar