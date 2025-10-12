import React from 'react'
import "../App.css"; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 z-50 w-full flex items-center gap-[265px] mr-[110px] 
    font-medium text-[1.2rem] text-gray-300   bg-opacity-35 backdrop-blur-sm border-b border-gray-800   mb-10">
   <img
  src="/logo.jpg"
  alt="Box Icon"
  className=" pop-in ml-34 w-21 h-21 "
/>
     <ul >
        <li className='hover:bg-white hover:text-black hover:rounded-md p-3'>Benefits</li>
        <li className='hover:bg-white hover:text-black hover:rounded-md p-3'>Features</li>
        <li className='hover:bg-white hover:text-black hover:rounded-md p-3'>Pricing</li>
        <li className='hover:bg-white hover:text-black hover:rounded-md p-3'>Testimonials</li>
        <li className='hover:bg-white hover:text-black hover:rounded-md p-3'>FAQ's</li>
     </ul>
       <button onClick={() => navigate("/wishlist")}  className='btn'>
        Join Wishlist</button>
    </div>       
  )
}

export default Navbar
