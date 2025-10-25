import { useState } from "react";
import Active from "./sub-components/Active";
import MineDebate from "./sub-components/MineDebates";
 

const Rooms = () => {
  const [activeTab, setActiveTab] = useState("active"); // "active" | "ended" | "mine"

  return ( 
    <div className="container mx-auto mt-20 mb-10">
      <ul className="flex gap-40 justify-center bg-gray-900 p-2 rounded-2xl text-2xl">
        <li>
          <button
            onClick={() => setActiveTab("active")}
            className={`px-5 py-2 rounded-4 font-semibold transition-all duration-300 ${
              activeTab === "active"
                ? "bg-green-600 text-white shadow-[0_0_15px_4px_rgba(74,222,128,0.6)]"
                : "text-gray-300 hover:text-white hover:bg-green-700"
            }`}
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveTab("ended")}
            className={`px-5 py-2 rounded-4 font-semibold transition-all duration-300 ${
              activeTab === "ended"
                ? "bg-green-600 text-white shadow-[0_0_15px_4px_rgba(74,222,128,0.6)]"
                : "text-gray-300 hover:text-white hover:bg-green-700"
            }`}
          >
            Ended
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveTab("mine")}
            className={`px-5 py-2 rounded-4 font-semibold transition-all duration-300 ${
              activeTab === "mine"
                ? "bg-green-600 text-white shadow-[0_0_15px_4px_rgba(74,222,128,0.6)]"
                : "text-gray-300 hover:text-white hover:bg-green-700"
            }`}
          >
            Mine
          </button>
        </li>
      </ul>

      <div className="mt-10">
        {activeTab === "active" && <Active />}
        {activeTab === "ended" && <div className="text-white text-center">No Ended Debates Yet</div>}
        {activeTab === "mine" && <MineDebate />}
      </div>
    </div>
  );
};

export default Rooms;
