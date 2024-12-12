import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className='container-2xl flex justify-between p-11 shadow-2xl mb-9  shadow-green-300'>
        <div className="text-4xl font-bold  hover:text-green-300">
            <Link to="/">TutorTrack</Link>
        </div>
        <ul className='flex gap-3' >
            <li className='font-bold text-3xl  hover:text-green-300'><Link to="/">Home</Link></li>
            <li className='font-bold text-3xl  hover:text-green-300'><Link to="/teachers">Teachers</Link></li>
            <li className='font-bold text-3xl  hover:text-green-300'><Link to="/booking-list">Booking</Link></li>
            
        </ul>
      
    </nav>
  )
}

export default NavBar
