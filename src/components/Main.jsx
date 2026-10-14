import { useRef, useState, useEffect } from "react";
import Poster from "./Poster.jsx";
import { toPng } from "html-to-image";
import { generateCrime } from "../crimes.js";

export default function Main() {
  const posterRef = useRef(null);

  const [reward, setReward] = useState("");

  const [suspect, setSuspect] = useState({
    item: "",
    crime: "",
    reward: "",
    imageUrl: "",
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

  function getNewSuspect() {
    if (allImages.length === 0) return;

    const randomNumber = Math.floor(Math.random() * allImages.length);
    const newSuspect = allImages[randomNumber];

    setSuspect((prevSuspect) => ({
      ...prevSuspect,
      item: newSuspect.item,
      crime: generateCrime(newSuspect.item),
      imageUrl: newSuspect.imageUrl,
    }));
  }

  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    const skip = Math.floor(Math.random() * 2000);

    fetch(
      `https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&limit=100&skip=${skip}`,
    )
      .then((res) => res.json())
      .then((data) => {
        const objects = (data.data ?? [])
          .filter((a) => a.images?.web?.url && a.title && a.title.length <= 25)
          .map((a) => ({ item: a.title, imageUrl: a.images.web.url }));
        setAllImages(objects);
      });
  }, []);

  async function downloadImage() {
    if (!posterRef.current) return;
    try {
      const dataUrl = await toPng(posterRef.current, {
        pixelRatio: 2,
        cacheBust: true,
      });
      const link = document.createElement("a");
      link.download = `wanted-${(suspect.item || "suspect").toLowerCase().replace(/\s+/g, "-")}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Could not save image", err);
    }
  }

  return (
    <main className="px-6 flex flex-col gap-3">
      <form action={getNewSuspect}>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-5">
            <div className="flex flex-col flex-2">
              <label htmlFor="item" className="font-fredoka font-medium">
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

          <div className="flex gap-3">
            <button
              type="submit"
              className="cursor-pointer hover:opacity-80 rounded-xl font-fredoka text-white py-1 bg-linear-to-r from-tomato-dark to-tomato w-full"
            >
              Generate new item
            </button>
            <button
              type="button"
              onClick={downloadImage}
              className="flex-3 hover:bg-gray-300/50 cursor-pointer px-3 hover:opacity-80 rounded-xl font-fredoka  border-2 outline-2 outline-dashed outline-black/20 -outline-offset-6  text-black py-2 bg-white"
            >
              Save
            </button>
          </div>
        </div>
      </form>
      <div ref={posterRef} className="p-8">
        <Poster suspect={suspect} />
      </div>
    </main>
  );
}
