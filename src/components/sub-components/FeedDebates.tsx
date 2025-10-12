import { useContext, useState } from "react";
import { IoIosPeople } from "react-icons/io";
import { DebateContext } from "../../DebatesContext";
 

const FeedDebate = () => {
  // 👇 added setActiveDebate from context
  const { debates, setActiveDebate: setActiveDebateInContext } = useContext(DebateContext); 
  const [dabate, setDebate] = useState({ name: "active" });
  const [activeDebate, setActiveDebate] = useState(null);

  const handleEnterDebate = (debateName: string, debate: any) => {
    setDebate({ name: debateName });
    setActiveDebate(debate);
    setActiveDebateInContext(debate); // 👈 this line adds the selected debate to global context
  };

  return (
    <div className="flex flex-wrap gap-5 justify-center mt-5">
      {dabate.name === "active" &&
        debates.map((debate) => (
          <div
            key={debate.id}
            className="card bg-black text-white rounded-2xl"
            style={{ width: "25rem", height: "35rem" }}
            name={debate}
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
              <p className="text-sm">Duration: {debate.duration}</p>
            </div>
            <ul className="list-group list-group-flush bg-black text-white">
              <li className="list-group-item font-bold bg-black text-white">
                Created by: Shiraj Mujawar
                <button className="bg-blue-600 ml-2 pr-2 pl-2 pt-1 pb-1 rounded text-white">
                  <IoIosPeople /> Joined
                </button>
              </li>
            </ul>
            <div className="card-body bg-black text-white">
              <button
                className="bg-blue-600 w-full h-10 rounded text-2xl font-bold"
                onClick={() => handleEnterDebate("inactive", debate)}
              >
                Enter Debate
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FeedDebate;
