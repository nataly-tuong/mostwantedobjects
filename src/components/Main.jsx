import { useState } from "react";
import Poster from "./Poster.jsx";

export default function Main() {
  const [reward, setReward] = useState("");

  const [suspect, setSuspect] = useState({
    name: "Colander",
    crime: "impersonating a much larger colander",
    reward: "5000",
    imageUrl: "https://m.media-amazon.com/images/I/71NTu8Ap87L.jpg",
  });

  function getNewSuspect(formData) {
    const newReward = formData.get("reward");
    setSuspect((prev) => ({ ...prev, reward: newReward }));
  }

  function formatReward(value) {
    const digits = value.replace(/\D/g, "").slice(0, 9);
    if (!digits) return "";
    return "$" + Number(digits).toLocaleString("en-US");
  }

  return (
    <main className=" px-6 flex flex-col gap-3">
      <form action={getNewSuspect}>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-5">
            <div className="flex flex-col flex-2">
              <label htmlFor="crime" className="font-fredoka font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="border py-1 w-full rounded-lg px-2 bg-white text-sm border-gray-500/50"
                placeholder="Will be generated..."
                value={suspect?.name ?? ""}
                readOnly
              />
            </div>
            <div className="flex flex-col flex-2">
              <label htmlFor="crime" className="font-fredoka font-medium">
                Crime
              </label>
              <input
                id="crime"
                name="crime"
                type="text"
                className="border py-1 w-full rounded-lg px-2 bg-white text-sm border-gray-500/50"
                value={suspect?.crime ?? ""}
                placeholder="Will be generated..."
                readOnly
              />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="reward" className="font-fredoka font-medium">
              Reward
            </label>
            <input
              id="reward"
              name="reward"
              type="text"
              value={reward}
              className="border py-1 w-full  rounded-lg px-2 bg-white text-sm border-gray-500/50"
              onChange={(e) => setReward(formatReward(e.target.value))}
              placeholder="e.g., $5,000"
            />
          </div>
          <button
            type="submit"
            className="cursor-pointer hover:opacity-80 rounded-2xl font-fredoka text-white py-1 bg-tomato w-full"
          >
            New suspect
          </button>
        </div>
      </form>
      <Poster suspect={suspect} />
    </main>
  );
}
