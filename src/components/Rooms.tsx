import { Link } from "react-router-dom"
import { FaPlus } from "react-icons/fa"
import Active from "./sub-components/Active"
import Debate from "./Debate"
import { useContext } from "react"
import { DebateContext } from "../DebatesContext"
import MineDebate from "./sub-components/MineDebates"

 

const Rooms = () => {

  const { debates } = useContext(DebateContext); 

  return (
      <div className="container text-center justify-center mt-20  ml-500">
      <ul className="nav nav-pills ml-25 mt-20 gap-50 text-2xl bg-gray-900 p-3 mr-20  rounded-2xl" id="pills-tab" role="tablist">
  <li className="nav-item ml-40" role="presentation">
    <button className="text-white nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Active</button>
  </li>
  <li className=" nav-item" role="presentation">
    <button className=" text-white nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Ended</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className=" text-white nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Mine</button>
  </li>
  
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"  >
    <Active></Active> </div>

  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"  >
 
    </div>
 
  <div className="tab-pane fade mb-10" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"  >
   <MineDebate  /> </div>
</div>  
    
    </div>
  )
}

export default Rooms