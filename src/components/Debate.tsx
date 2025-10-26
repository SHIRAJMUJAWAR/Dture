import { useContext } from "react";
import { IoIosPeople } from "react-icons/io";
import { DebateContext } from "../DebatesContext";
import { Link } from "react-router-dom";
 

const Debate = () => {
  const { debates } = useContext(DebateContext); // get debates array

  return (
    <div className="flex flex-wrap gap-5 justify-center mt-6">
      {debates.map((debate) => (
        <div
          key={debate.id}
          className="card bg-gray-900  text-white rounded-2xl"
          style={{ width: "25rem", height: "35rem" }}
        >
          {debate.image && (
            <img
              src={debate.image}
              className="card-img-top object-cover h-40 w-full rounded-t-2xl"
              alt={debate.name}
            />
          )}
          <div className="card-body bg-gray-900  text-white">
            <h5 className="card-title">{debate.name}</h5>
            <p className="card-text h-14 mt-2">{debate.description}</p>
             
          </div>
          <ul className="list-group list-group-flush bg-gray-900  text-white">
            <li><p className="list-group list-group-flush bg-gray-900  text-white">Duration: {debate.duration}</p></li>
            <li className="list-group-item font-bold bg-gray-900  text-white">
              Created by: Shiraj Mujawar
              <button className="bg-green-600 ml-2 pr-2 pl-2 pt-1 pb-1 rounded text-white">
                <IoIosPeople /> Joined
              </button>
            </li>
          </ul>
          <div className="card-body bg-gray-900  text-white">
           <Link to='/entercreate'>  <button className="bg-green-600 text-xl w-full h-10 rounded text-2xl font-bold"> 
              Enter Debate
            </button></Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Debate;