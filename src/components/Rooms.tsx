import { Link } from "react-router-dom"
import CreateDebates from "./CreateDebates"
import Feed from "./Feed"
import { FaPlus } from "react-icons/fa"

 

const Rooms = () => {
  return (
      <div className="container text-center mt-1  ml-500">
      <ul className="nav nav-pills ml-25  gap-50 text-2xl bg-black p-3 mr-20  rounded-2xl" id="pills-tab" role="tablist">
  <li className="nav-item ml-40" role="presentation">
    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Active</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Ended</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Mine</button>
  </li>
  
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"  >
    
    Active Debates
    <br />
    <Feed></Feed> </div>

  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"  >
 
    </div>
 
  <div className="tab-pane fade mb-10" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"  >
    <div className="text-3xl mt-3 ml-120"> 
   <Link to="/create" > <button className='bg-blue-600 w-90 h-15 rounded-5 border text-white font-semibold mt-10 flex flex-row items-center justify-center'> 
    <FaPlus className='mt-1 mr-2'/>Create Your Debates</button></Link>
   </div>
    </div>
</div>  
    
    </div>
  )
}

export default Rooms