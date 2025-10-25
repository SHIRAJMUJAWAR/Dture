 import { useContext } from "react";
import { IoIosPeople } from "react-icons/io";
import { Link } from "react-router-dom";
import { DebateContext } from "../../DebatesContext";
import { HiTrendingUp } from "react-icons/hi";
 

const TrendDebate = () => {
  const { debates } = useContext(DebateContext); // get debates array

  return (<>
   {debates.length >0 ? <div className="flex flex-wrap gap-5 justify-center mt-30">
      {debates.map((debate) => (
        <div
          key={debate.id}
          className="card bg-black text-white rounded-2xl"
          style={{ width: "25rem", height: "35rem" }}
        >
          {debate.image && (
            <img
              src={debate.image}
              className="card-img-top object-cover h-40 w-full rounded-t-2xl"
              alt={debate.name}
            />
          )}
          <div className="card-body bg-black text-white">
            <h5 className="card-title">{debate.name}</h5>
            <p className="card-text h-14 mt-2">{debate.description}</p>
             
          </div>
          <ul className="list-group list-group-flush bg-black text-white">
            <li><p className="list-group list-group-flush bg-black text-white">Duration: {debate.duration}</p></li>
            <li className="list-group-item font-bold bg-black text-white">
              Created by: Shiraj Mujawar
              <button className="bg-green-600 ml-2 pr-2 pl-2 pt-1 pb-1 rounded text-white">
                <IoIosPeople /> Joined
              </button>
            </li>
          </ul>
          <div className="card-body bg-black  ">
           <Link to='/entercreate'>  <button className=" text-white bg-green-600 text-xl w-full h-10 rounded font-bold"> 
              Enter Debate
            </button></Link>
          </div>
        </div>
      ))}
    </div> :
       <div className="items-center justify-center flex flex-col mt-50">
        < HiTrendingUp  size={100} className="text-green-600"/>
       <h1>No Trensing Debates</h1>
        <p className="text-gray-500">  Check back later for hot debates that are <br /> trending</p>
       </div>
    }

 
 </>  )
};

export default TrendDebate;