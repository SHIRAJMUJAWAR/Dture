import React from 'react'
import "../App.css"; // Import the CSS file
import { CiMail } from "react-icons/ci";
import { TbPointFilled } from "react-icons/tb";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (  <div>
    <center  className='border-b border-gray-800 '>
      <div className='w-30.5 h-30 mb-2 rounded rounded-4xl bg-sliver-500 item-center mt-20 mb-10'> 
        <img
  src="/logo.jpg"
  alt="Box Icon"
  className="w-30 h-30 mb-2 rounded-4xl bg-red-500 shawdow-lg"
/></div> 
     <h1 className='mb-10 text-xl font-bold '>Where Your Voice Finds Power — Discover Dtrue</h1>
     <button href='hello@dture.online' className=' font-semibold bg-gray-500 item-center flex box p-4 rounded-2xl mb-15 w-60 h-15 text-2xl'> 
      <CiMail className='text-2xl ml-3 mr-2 font-semibold' /> <p className='text-lg'>hello@dture.online </p></button>
     <center> <ul className='felx item-center justify-center g-1 mb-15 text-lg'>
        <li>Benefits</li>
        <li><TbPointFilled className='mt-2'/></li>
        <li>Features</li>
        <li><TbPointFilled className='mt-2' /></li>
        <li>Waitlist</li>
     </ul>
      
     </center>
    </center>
   
    <div className='flex ml-32 gap-130 mt-5 text-xl'>
        <p>Dtrue</p>
        <div  className='flex gap-3  '> 
          <div className='social'><BsTwitterX className='mt-1' /></div>
          <div  className=' text-xl social  '><AiFillInstagram  className='mt-1' /></div>
         
        </div>
        <p className='mb-8'>Privacy Policy</p>
    </div>
   
     </div>
  )
}

export default Footer
