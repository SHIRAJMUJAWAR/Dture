import { CiSearch } from "react-icons/ci"
import EnterDebate from "./sub-components/EnterDebate"
 

const Explore = () => {
  return (
     <div>    
       <div  className="container  ">
    <div>
          <div className="mt-3xw-250 bg-black mt-1 rounded-4xl  text-2xl ml-52 mr-52  border-gray-600 flex flex-row   gap-3"> 
       
      <CiSearch size={40} className="  m-2 absolute mr-20 "/>
         <input
          className=" bg-black pl-13   h-15 w-220 rounded-4xl border-gray-600"
        placeholder="  Search debates,rooms,users "
    
      />
      </div>
    
    <div  className="col mb-5">  </div>
   
  </div>
</div>
    </div>
  )
}

export default Explore