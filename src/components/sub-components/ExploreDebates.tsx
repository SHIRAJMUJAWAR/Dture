import { useContext } from "react";
import { IoIosPeople } from "react-icons/io";
import { Link } from "react-router-dom";
import { DebateContext } from "../../DebatesContext";
import { HiH1 } from "react-icons/hi2";
import { IoCompass } from "react-icons/io5";
 

const ExploreDebate = () => {
  const { debates } = useContext(DebateContext); // get debates array

  return ( <> 
  { debates.length >0 ? <div className="flex flex-wrap gap-5 justify-center mt-5">
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
          <div className="card-body bg-black text-white">
           <Link to='/entercreate'>  <button className="bg-green-600 text-xl w-full h-10 rounded text-2xl font-bold"> 
              Enter Debate
            </button></Link>
          </div>
        </div>
      ))}
    </div> :
          <div className="items-center justify-center flex flex-col mt-20">
           <IoCompass  size={100} className="text-green-600"/>
            <h1>Explore Debates</h1>
            <p className="text-gray-500">Discover trending debates and join the conversaton </p>
           
         </div>
    }
 
    </>
  );
};

export default ExploreDebate;