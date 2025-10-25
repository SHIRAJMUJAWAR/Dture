 
import { useState } from 'react';
import { CgProfile } from 'react-icons/cg' 
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom'

 const Navbar = () => {
    const [actives, setActive] = useState("/");

  const handleActive = (path :string) => {
    setActive(path);
  };
  
   return (
     <div className="fixed top-0 z-50 w-full flex items-center gap-[245px] mr-[110px] 
    font-medium text-[1.2rem] text-gray-300   bg-opacity-35 backdrop-blur-sm border-b border-gray-800   mb-10" > 
         <Link
          to="/"     onClick={() => handleActive("/")} > <img src="/logo.png" alt="" className="w-17 h-15 flex flex-row ml-1 rounded-5" /> </Link>
       <ul className="nav nav-pills flex space-x-4 text-bold text-white gap-8   lg:block">
      <li className="nav-item text-white">
        <Link
          to="/"
          onClick={() => handleActive("/")}
          className={`  text-white nav-link no-underline  hover:-translate-y-1    hover:-translate-y-1     ${
            actives === "/" ? " actives font-semibold  actives font-semibold shadow-[0_0_25px_4px_rgba(134,239,172,0.4)]   hover:shadow-[0_0_35px_6px_rgba(134,239,172,0.7 transition-all duration-300 transform  " : "text-black"
          }`}
        >
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/feed"
          onClick={() => handleActive("/feed")}
          className={` text-white nav-link no-underline  hover:-translate-y-1  ${
            actives === "/feed" ? " actives font-semibold shadow-[0_0_25px_4px_rgba(134,239,172,0.4)]   hover:shadow-[0_0_35px_6px_rgba(134,239,172,0.7 transition-all duration-300 transform " : "text-black"
          }`}
        >
          Feed
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/trend"
          onClick={() => handleActive("/trend")}
          className={` text-white nav-link no-underline  hover:-translate-y-1  ${
            actives === "/trend" ? " actives font-semibold shadow-[0_0_25px_4px_rgba(134,239,172,0.4)]   hover:shadow-[0_0_35px_6px_rgba(134,239,172,0.7 transition-all duration-300 transform " : "text-black"
          }`}
        > 
          Trend
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/explore"
          onClick={() => handleActive("/explore")}
          className={` text-white nav-link no-underline  hover:-translate-y-1  ${
            actives === "/explore" ? " actives font-semibold shadow-[0_0_25px_4px_rgba(134,239,172,0.4)]   hover:shadow-[0_0_35px_6px_rgba(134,239,172,0.7 transition-all duration-300 transform  " : "text-black"
          }`}
        >
          Explore
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/rooms"
          onClick={() => handleActive("/rooms")}
          className={` text-white nav-link no-underline  hover:-translate-y-1    hover:-translate-y-1   ${
            actives === "/rooms" ? " actives font-semibold  actives font-semibold shadow-[0_0_25px_4px_rgba(134,239,172,0.4)]   hover:shadow-[0_0_35px_6px_rgba(134,239,172,0.7 transition-all duration-300 transform hover:-translate-y-1 " : "text-black"
          }`}
        >
          Rooms
        </Link>
      </li>
    </ul>
    
       <div className="text-xl mt-3 flex flex-row items-center justify-center gap-4"> 
   <Link to="/create"  className='flex flex-col p-2 nav-link'> <button className='bg-green-600 
   no-underline flex flex-row w-60 items-center h-10 rounded-5 border text-white justify-center
    font-semibold mt-10  actives font-semibold shadow-[0_0_25px_4px_rgba(134,239,172,0.4)]  
     hover:shadow-[0_0_35px_6px_rgba(134,239,172,0.7 transition-all duration-300 transform 
     hover:-translate-y-1' onClick={()=> handleActive('\create')}>
    <FaPlus className='mt-1 mr-2 no-underline'/>Create Your Debates</button></Link>
        <Link className="no-underline " to="/proflie">
        <CgProfile size={40} onClick={()=> handleActive('\create')}  className="text-white ml-auto mr-4" /></Link>   

   </div>
 
       
     </div>
   )
 }
 
 export default Navbar
 