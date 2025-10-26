import { useContext } from "react";
import { DebateContext } from "../../DebatesContext";
import { useParams } from "react-router-dom";
import { IoSend } from "react-icons/io5";

const EnterDebate = () => {
  const { id } = useParams(); // get ID from URL
  const { activeDebates } = useContext(DebateContext);

  // find this debate
  const debate = activeDebates.find((d) => d.id === Number(id));

  if (!debate) {
    return (
      <div className="text-center text-white mt-25">
        <h2 className="text-2xl">No debate found 😅</h2>
        <p className="text-gray-400">Please go back and select a debate.</p>
      </div>
    );
  }

  return (
    <div className="h-screen bg-black text-white mt-20 p-5 rounded-lg border border-gray-600 mb-20">
      <div className="flex items-center bg-green-700 rounded-lg p-3 ">
        <img
          src={`${debate.image}`}
          alt={debate.name}
          className="w-20 h-20 rounded-3xl object-cover mr-4"
        />
        <h1 className="text-2xl font-bold">{debate.name}</h1>
      </div>

      <div className="flex flex-row mt-4">
        <div className="w-1/3 pr-5 border-r border-gray-700">
          <p className="text-green-300 font-bold text-xl mb-2">
            Description:
          </p>
          <p>{debate.description}</p>
        </div>

        <div className="flex-1 pl-5">
          <p className="text-green-300 font-bold text-xl mb-2">Opinions:</p>
          <div className="bg-gray-900 rounded-lg p-4">
            <div className="flex flex-col gap-3">
              <div className="border-4 border-red-400 h-51 rounded-3xl bg-gray-500 p-4 w-50 text-black font-bold"></div>
              <div className="border-4 ml-110 h-51 border-green-400 rounded-3xl bg-gray-500 w-50 p-4 text-black font-bold"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-black border-t border-gray-700 p-3 flex items-center">
        <input
          type="text"
          placeholder="Give your opinion..."
          className="flex-1 p-3 border rounded-lg bg-gray-800 text-white focus:outline-none"
        />
        <IoSend className="ml-3 text-green-500 cursor-pointer" size={40} />
      </div>
    </div>
  );
};

export default EnterDebate;
