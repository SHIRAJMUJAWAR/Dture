import React from 'react'
import { PiWarningCircle } from "react-icons/pi";

const Wishlist = () => {
  return (
    <div className='mt-50 mb-41 pop-in2'>
      <h1 className='text-6xl font-bold mb-8' >Claim Your Spot in the <br /> Revolution</h1>
      <h1 className='text-xl font-bold mb-1 text-gray-500'>Don't just watch it happen — lead it.</h1>
      <p  className='text-xl font-lg mb-12 text-gray-500'>Sign up now to get early access to Dtrue.</p>
      <input type="text" placeholder='Enter your email' className=' p-5 text-xl box rounded-xl mr-3 w-90 h-13 border-gray-500 mb-8' /> <button className='btn'> Join Wishlist</button>
      <p className='mb-50 text-xl text-gray-500 flex ml-152' > <PiWarningCircle className='mt-1 mr-1'/>No Spam, Only Genuine Updates</p>
      <hr className=''/>
    </div>
  )
}

export default Wishlist
