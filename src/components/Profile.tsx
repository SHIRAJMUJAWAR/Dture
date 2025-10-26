 import { useContext } from "react";
import MineDebate from "./sub-components/MineDebates"
import { DebateContext } from "../DebatesContext";

const Profile = () => {

   const { debates } = useContext(DebateContext); // get debates array

  return (
    <div className="text-white p-5 rounded-2xl space-y-5" >
        <div className=" rounded-2xl object-cover mt-20 "  > 
            <div className="   h-71 bg-gray-900 rounded-2xl p-10  flex flex-row mb-10 shadow-[0_0_25px_4px_rgba(134,239,172,0.4)]  
                         transition-all duration-300 transform  ">
           <div className="ml-30"> <img src="\shiraj.jpg" alt="" className="w-30  rounded-5" />   
                      <div className="text-3xl font-bold m-10">Shiraj_mujawar786</div>
            </div>
          <div className="container text-center">
             
  <div className="row text-center text-5xl font-semibold">
    <div className="col-2 ">
    50
   <h1></h1>
    <p className="text-xl font-sm mt-30"> Followers</p>
    </div>
    <div className="col">
      20
      <h1></h1>
    <p className="text-xl  font-sm mt-30"> Following</p>
    </div>
    <div className="col">
    {debates.length}
    <h1></h1>
    <p className="text-xl font-sm mt-30"> Debates</p>
    </div>
         
  </div>
 
    <div>   <p className=" mt-50 text-2xl text-gray-900"> <br />A beta tester of Dture</p></div>
  </div> 
        </div>
   
<div  className="  flex flex-col items-center ">
  <div className="items-center w-full bg-gray-900 rounded-4 mb-20 shadow-[0_0_25px_4px_rgba(134,239,172,0.4)]                  
                         transition-all duration-300 transform ">  
    <h1 className=" ml-159 text-xl font-bold text-gray-500 "> Debates </h1></div>
      
    </div>     
    <MineDebate ></MineDebate>
        </div>
         
       
    </div>
  )
}

export default Profile