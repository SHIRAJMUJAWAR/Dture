import { CiSearch } from "react-icons/ci"
import ExploreDebate from "./sub-components/ExploreDebates"
 

const Explore = () => {
  return (
     <div>    
       <div  className="container  ">
    <div>
          <div className="mt-3x w-250 bg-black mt-19 rounded-4xl  text-2xl ml-52 mr-52  border-gray-600 flex flex-row   gap-3"> 
       
      <CiSearch size={40} className="  m-2 absolute mr-20 "/>
         <input
          className=" bg-gray-900 pl-13   h-15 w-250 rounded-4xl border-gray-600"
        placeholder="  Search debates,rooms,users "
    
      />
      </div>
    
    <div  className="col mb-5"> 
      <ExploreDebate></ExploreDebate> </div>
   
  </div>
</div>
    </div>
  )
}

export default Explore