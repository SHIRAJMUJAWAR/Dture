import { useContext } from "react";
import { DebateContext } from "../../DebatesContext";
import { IoSend } from "react-icons/io5";

 
 const EnterDebate = () => {
  const { debates } = useContext(DebateContext); // get debates array

   return (
    <div className="w-full h-180 bg-black  rounded-lg mb-5 border-1 border-gray-600 p-1">
       
      {debates.map((debate) => ( <div>
 
    <div className="  mt-1 text-black w-full h-20 bg-blue-400 rounded-lg flex flex-row items-center object-cover ">
        <img src={debate.image} className="ml-10 rounded-4xl" alt="" width={50} height={60} />

         <h1 className="ml-4">{debate.name}</h1> 
         
     </div>
     <div className="flex flex-row p-3 ">
       <img src={`${debate.image}`} alt="" className="rounded-3xl ml-40" width={100} height={50}/>  
       <p className="m-20 text-2xl">{debate.description}</p>
      
     </div>
     <hr />
<div className="fixed bottom-0 left-0 w-full  bg-black border-t text-xl border-gray-300 p-3 flex flex-row">
    <input
      type="text"
      placeholder="Give your Opinion for this Debate..."
      className="w-full  p-3 border rounded-lg focus:outline-none"
    />
    <IoSend className="ml-2 text-blue-500" size={50}/>
  </div>
      </div>
      ))}
      
    </div>
     
   )
 }
 
 export default EnterDebate
 
