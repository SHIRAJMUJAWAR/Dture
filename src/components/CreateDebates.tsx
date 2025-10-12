import React, { useState, useContext } from "react";
import { DebateContext } from "../DebatesContext";
 

const CreateDebates = () => {
  const { debates, addDebate } = useContext(DebateContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("24 Hours");
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleAddDebate = () => {
    if (!name.trim() || !description.trim()) return;

    const newDebate: Debate = {
      id: Date.now(),
      name,
      description,
      duration,
      image,
    };

    addDebate(newDebate);

    setName("");
    setDescription("");
    setDuration("24 Hours");
    setImage(null);
  };

  return (
    <div className="container text-center mt-1">
      <div className="m-10 text-2xl ml-52 mr-52  "> 
         <input
          className=" bg-black p-3  w-220 rounded-xl border-gray-600"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      </div>
      <div className="m-10 text-xl ml-52 mr-52"> 
      <textarea
        className=" bg-black p-3 h-90 w-220 rounded-xl"
        rows={10}
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      /> </div>
      <div className="m-10 text-xl ml-59 mr-59"> 
        <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className=" bg-black p-3  w-190 rounded-xl mb-10"
      />
       </div>
      <ul className="nav nav-pills gap-40 text-3xl bg-black p-3 rounded-2xl mt-20 mb-5 ml-25 mr-25 flex  justify-center" id="pills-tab" role="tablist">
        {["24 Hours", "3 Days", "7 Days"].map((d) => (
          <li className="nav-item" key={d}>
            <button
              className={`nav-link ${duration === d ? "active" : ""}`}
              onClick={() => setDuration(d)}
            >
              {d}
            </button>
          </li>
        ))}
      </ul>
       <div className="text-3xl">
        <button
        className="bg-blue-600 w-95 h-18 rounded-5 font-semibold mt-10"
        onClick={handleAddDebate}
      >
        Create Debate
      </button>
       </div>

      {/* Show debates */}
      <div className="mt-10 text-white">
        {debates.map((debate) => (
          <div key={debate.id} className="bg-gray-800 p-5 rounded-2xl my-3">
            {debate.image && (
              <img
                src={debate.image}
                alt={debate.name}
                className="w-40 h-40 object-cover rounded-xl mb-3"
              />
            )}
            <h2 className="text-2xl font-bold">{debate.name}</h2>
            <p>{debate.description}</p>
            <span className="text-sm">{debate.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateDebates;