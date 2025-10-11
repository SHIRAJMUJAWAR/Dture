import React, { useState, useContext } from "react";
import { DebateContext  } from "../DebateContext";

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
      <input
        className="form-control w-170 text-2xl h-20"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        className="form-control w-170"
        rows={10}
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="form-control w-170"
      />
      <ul className="nav nav-pills gap-50 text-3xl bg-black p-3 rounded-2xl">
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
      <button
        className="bg-blue-600 w-95 h-20 rounded-5 font-semibold mt-10"
        onClick={handleAddDebate}
      >
        Create Debate
      </button>

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
