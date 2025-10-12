import React from 'react'
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { CiShare2 } from "react-icons/ci";
import { FaFaceSmileWink } from "react-icons/fa6";

const Body3 = () => {
  return (
         <div className='  ml-30 mr-28 mb-5 p-10 border-b border-gray-800  '>
       <div className="  flex fexl-col grid grid-cols-1  md:grid-cols-3 grid-cols-1 md:grid-row-3 gap-8">
  <div className="row-span-3 h- full w-90 rounded-3xl overflow-hidden">
    <img
      src="/trending.png"   // replace with your image
      alt="Full Column"
      className="w-full h-full object-contain"
    />
  </div>
  <div className=" col-span-2  flex items-center justify-center h-40 w-160px rounded-3xl">
   <h1 className="absolute mt-[10px] ml-[250px] mr-[300px] text-[3.5rem] font-bold">
   Dtrue’s Advanced Capabilities
</h1>

  </div> 

<div className="bg-green-500 h-45 w-90 p-2 boxs text-white rounded-3xl">
<div><svg width="50"  height="29"  className="text-white mt-0 ml-10"  fill="currentColor"  aria-hidden="true">
  <IoChatbubbleEllipsesSharp className='text-3xl'/> </svg></div>
  <h1 className="text-[25px] font-semibold leading-tight mb-1 mt-2"> Global Trends </h1>
  <p className="text-[20px] leading-snug opacity-70">Dtrue keeps you engaged with trending Global topics that shape our world..</p>
  </div>

<div className="bg-green-500 h-45 w-90 p-2 boxs text-white rounded-3xl">
<div><svg width="50"  height="29"  className="text-white mt-0 ml-10"  fill="currentColor"  aria-hidden="true">
 <CiShare2 className='text-3xl'/> </svg></div>
  <h1 className="text-[25px] font-semibold leading-tight mb-1 mt-2"> One Opinion at a Time </h1>
  <p className="text-[20px] leading-snug opacity-70">Join debates where every user shares.</p>
  </div>

  <div className="bg-green-500 h-45 w-90 p-2 boxs text-white rounded-3xl">
<div><svg width="50"  height="29"  className="text-white mt-0 ml-10"  fill="currentColor"  aria-hidden="true">
 <FaFaceSmileWink className='text-3xl'/>  </svg></div>
  <h1 className="text-[25px] font-semibold leading-tight mb-1 mt-2"> Yours Always.</h1>
  <p className="text-[20px] leading-snug opacity-70">Every opinion is hashed— identity stays hidden.</p>
  </div>
  
<div className="bg-green-500 h-45 w-90 p-2 boxs text-white rounded-3xl">
<div><svg width="50"  height="32"  className="text-white mt-0 ml-10"  fill="currentColor"  aria-hidden="true">
<FaArrowsDownToPeople className='text-4xl'/>  </svg></div>
  <h1 className="text-[25px] font-semibold leading-tight mb-1 mt-2">Raise your voice. </h1>
  <p className="text-[20px] leading-snug opacity-70">One opinion. Real impact.
Shaping truth — together.</p>
  </div>

</div>

         </div>
  )
}

export default Body3