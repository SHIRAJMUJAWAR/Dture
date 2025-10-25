import { useContext } from "react";
import { DebateContext } from "../../DebatesContext";
import { IoIosPeople } from "react-icons/io";
import { IoChatbubbles } from "react-icons/io5";

const Active = () => {
  const { activeDebates, removeActiveDebate } = useContext(DebateContext);

  if (activeDebates.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-40 text-center px-4">
        <IoChatbubbles size={100} className="text-green-400 mb-4" />
        <h1 className="text-2xl font-bold text-white mb-2">
          No active debate rooms found
        </h1>
        <p className="text-gray-400">
          Join a debate to see active rooms
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-6 justify-center mt-8 px-4">
      {activeDebates.map((debate) => (
        <div
          key={debate.id}
          className="relative bg-black border border-green-400/30 text-white 
                     rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-2xl 
                     shadow-[0_0_15px_3px_rgba(74,222,128,0.3)] 
                     hover:shadow-[0_0_25px_5px_rgba(74,222,128,0.6)] 
                     transition-all duration-300 overflow-hidden"
          style={{ width: "25rem", height: "32rem" }}
        >
          {debate.image && (
            <img
              src={debate.image}
              className="object-cover h-40 w-full rounded-tr-2xl"
              alt={debate.name}
            />
          )}

          <div className="p-5">
            <h5 className="text-xl font-bold text-green-400">{debate.name}</h5>
            <p className="text-gray-300 mt-2 line-clamp-3">
              {debate.description}
            </p>
          </div>

          <ul className="px-5 text-sm text-gray-400 space-y-2">
            <li>
              Duration: <span className="text-green-300">{debate.duration}</span>
            </li>
            <li className="font-semibold text-white flex items-center justify-between">
              Created by: <span className="text-green-400">Shiraj Mujawar</span>
              <button className="bg-green-600 px-3 py-1 rounded flex items-center gap-1 text-white hover:bg-green-500 transition-all">
                <IoIosPeople size={18} /> Joined
              </button>
            </li>
          </ul>

          <div className="absolute bottom-0 left-0 w-full p-4">
            <button
              onClick={() => removeActiveDebate(debate.id)}
              className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-2 rounded-xl 
                         shadow-[0_0_10px_2px_rgba(255,0,0,0.5)] transition-all duration-300"
            >
              Leave Debate
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Active;
