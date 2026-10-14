import { useState } from "react";
import Poster from "./Poster.jsx";

export default function Main() {
  const [reward, setReward] = useState("");

  const [suspect, setSuspect] = useState({
    item: "Colander",
    crime: "impersonating a much larger colander",
    reward: "$5,000",
    imageUrl: "https://m.media-amazon.com/images/I/71NTu8Ap87L.jpg",
  });

  function formatReward(value) {
    const digits = value.replace(/\D/g, "").slice(0, 9);
    if (!digits) return "";
    setSuspect((prevSuspect) => ({
      ...prevSuspect,
      reward: "$" + Number(digits).toLocaleString("en-US"),
    }));
    return "$" + Number(digits).toLocaleString("en-US");
  }

  return (
    <main className="px-6 flex flex-col gap-3">
      <form>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-5">
            <div className="flex flex-col flex-2">
              <label htmlFor="crime" className="font-fredoka font-medium">
                Item
              </label>
              <input
                id="item"
                name="item"
                type="text"
                className="border py-1 w-full rounded-lg px-2 italic bg-gray-300/50 text-sm border-gray-500/50"
                placeholder="Will be generated..."
                value={suspect?.item ?? ""}
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
                className="border py-1 w-full italic rounded-lg px-2 bg-gray-300/50 text-sm border-gray-500/50"
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
            className="cursor-pointer hover:opacity-80 rounded-xl font-fredoka text-white py-2 bg-linear-to-r from-tomato-dark to-tomato w-full"
          >
            Generate new item
          </button>
        </div>
      </form>
      <Poster suspect={suspect} />
    </main>
  );
}
