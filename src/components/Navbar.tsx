 
import { useState } from 'react';
import { CgProfile } from 'react-icons/cg' 
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom'

 const Navbar = () => {
    const [active, setActive] = useState("/");

  const handleActive = (path :string) => {
    setActive(path);
  };
   return (
     <div className=" flex flex-row items-center justify-center bg-black gap-55 sticky top-0 " > 
        <img src="/logo.jpg" alt="" className="w-15 h-15 flex flex-row ml-0" /> 
      <header className="d-flex justify-content-center  text-2xl py-3">
       <ul className="nav nav-pills flex space-x-4 text-white gap-8 bg-black">
      <li className="nav-item text-white">
        <Link
          to="/"
          onClick={() => handleActive("/")}
          className={`nav-link no-underline text-white${
            active === "/" ? " active font-semibold" : "text-black"
          }`}
        >
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/feed"
          onClick={() => handleActive("/feed")}
          className={`nav-link no-underline text-white${
            active === "/feed" ? " active font-semibold" : "text-black"
          }`}
        >
          Feed
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/trend"
          onClick={() => handleActive("/trend")}
          className={`nav-link no-underline text-white${
            active === "/trend" ? " active font-semibold" : "text-black"
          }`}
        > 
          Trend
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/explore"
          onClick={() => handleActive("/explore")}
          className={`nav-link no-underline text-white${
            active === "/explore" ? " active font-semibold" : "text-black"
          }`}
        >
          Explore
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/rooms"
          onClick={() => handleActive("/rooms")}
          className={`nav-link no-underline${
            active === "/rooms" ? " active font-semibold" : "text-black"
          }`}
        >
          Rooms
        </Link>
      </li>
    </ul>
      </header> 
       <div className="text-xl mt-3 flex flex-row items-center justify-center gap-4"> 
   <Link to="/create"  className='flex flex-col p-2'> <button className='bg-blue-600 flex flex-row w-60 items-center h-10 rounded-5 border text-white justify-center font-semibold mt-10'>
    <FaPlus className='mt-1 mr-2'/>Create Your Debates</button></Link>
        <Link className="no-underline" to="/proflie"><CgProfile size={40}  className="text-white ml-auto mr-4" /></Link>   

   </div>
 
       
     </div>
   )
 }
 
 export default Navbar
 