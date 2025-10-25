import { useContext } from "react";
import { IoIosChatboxes, IoIosPeople } from "react-icons/io";
import { DebateContext } from "../../DebatesContext";
import { Link } from "react-router-dom";
import { MdOutlineAddToPhotos } from "react-icons/md";
 

const MineDebate = () => {
  const { debates, addActiveDebate } = useContext(DebateContext);

  const handleEnterDebate = (debate: any) => {
    addActiveDebate(debate); // 👈 add to active debates array
  };

  return (<> 
    {debates.length >0 ?<div className="flex flex-wrap gap-5 justify-center mt-5">
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
            <li><p className="text-sm">Duration: {debate.duration}</p></li>
            <li className="list-group-item font-bold bg-black text-white">
              Created by: Shiraj Mujawar
              <button className="bg-green-600 ml-2 pr-2 pl-2 pt-1 pb-1 rounded text-white">
                <IoIosPeople /> Joined
              </button>
            </li>
          </ul>
          <div className="  card-body bg-black  ">
              <Link to='/entercreate' className="text-white">
            <button
              className="bg-green-600  w-full h-10 rounded text-2xl font-bold "
              onClick={() => handleEnterDebate(debate)}
            >
             <Link to='/entercreate'>Enter Debate</Link>  
            </button></Link>
          </div>
        </div>
      ))}
    </div>:<div>
       <div className="items-center justify-center flex flex-col mt-10">
        <IoIosChatboxes  size={100} className="text-green-600"/>
         <h1>No Debates Are present!</h1>
         <p className="text-gray-500"> Looks like you`ve not create any Dabates create  your own Debates. </p>
         <p className="text-gray-500"> Explore more oR  create your own!</p>
        <div className="items-center text-2xl text-gray-600 mt-5 ">
             <Link to="/create"  className='flex flex-col p-2 nav-link'> 
        <button className="bg-black p-3 flex flex-row rounded-5 ">  Create Your Own Debates <MdOutlineAddToPhotos size={30} className="m-1"/></button>
             </Link>
        </div>
      </div>
      </div>}

      
 </> );
};

export default MineDebate;
