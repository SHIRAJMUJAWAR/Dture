import { useContext } from "react";
import { DebateContext } from "../../DebatesContext";

const Active = () => {
  const { activeDebates, removeActiveDebate } = useContext(DebateContext);

  if (activeDebates.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-400">
        No active debates yet.
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-5 justify-center mt-10 text-white">
      {activeDebates.map((debate) => (
        <div
          key={debate.id}
          className="card bg-black rounded-2xl p-5"
          style={{ width: "25rem", minHeight: "25rem" }}
        >
          {debate.image && (
            <img
              src={debate.image}
              alt={debate.name}
              className="rounded-t-2xl h-56 w-full object-cover mb-3"
            />
          )}
          <h2 className="text-2xl font-bold">{debate.name}</h2>
          <p className="mt-3 text-gray-300">{debate.description}</p>
          <p className="mt-2 text-sm text-gray-400">
            Duration: {debate.duration}
          </p>
          <button
            onClick={() => removeActiveDebate(debate.id)}
            className="mt-5 bg-red-600 w-full py-2 rounded text-lg font-bold"
          >
            Leave Debate
          </button>
        </div>
      ))}
    </div>
  );
};

export default Active;
