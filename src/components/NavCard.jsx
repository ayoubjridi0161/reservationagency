import React from 'react'
import { Link } from 'react-router-dom'

export const NavCard = (props) => {
  return (
    <Link to="hotels" className='ml-5 hover:underline text-3xl text-blue-300 font-gurajada'>{props.nav}</Link>



  )
}
