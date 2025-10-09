 
import { CgProfile } from 'react-icons/cg' 
import { Link } from 'react-router-dom'

 const Navbar = () => {
   return (
     <div className=" flex flex-row items-center justify-center bg-black gap-90" > 
        <img src="/logo.jpg" alt="" className="w-15 h-15 flex flex-row ml-0" /> 
      <header className="d-flex justify-content-center  text-2xl py-3">
    <ul className="nav nav-pills">
       <li className="nav-item  ">
      <a href="#" className="nav-link   mr-9" aria-current="page"> <Link className="no-underline" to="/">Home</Link> </a>
      </li> <li className="nav-item  mr-9"><a href="#" className=" nav-link text-black"><Link   to="/feed" className="no-underline"> Feed</Link></a>
      
      </li> <li className="nav-item mr-9"><a href="#"   className="nav-link"><Link  to='/trend' >Trend</Link> </a></li>
       <li className="nav-item mr-9"><a href="#" className="nav-link "><Link className="no-underline" to="/explore">Explore</Link></a>
      </li> <li className="nav-item mr-9"><a href="#" className="nav-link" > <Link className="no-underline" to="/rooms">Room</Link> </a>
      </li>  </ul> 
      </header>
        <Link className="no-underline" to="/proflie"><CgProfile size={40}  className="text-white ml-auto mr-4" /></Link>   
       
     </div>
   )
 }
 
 export default Navbar
 