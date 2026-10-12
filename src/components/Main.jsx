import Poster from "./Poster.jsx";

export default function Main() {
  return (
    <main className="px-6 flex flex-col gap-3">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-5">
          <div className="flex flex-col flex-2">
            <label htmlFor="crime" className="font-fredoka font-medium">
              Crime
            </label>
            <input
              id="crime"
              name="crime"
              type="text"
              className="border py-1 w-full rounded-lg px-2 text-sm border-gray-500/50"
              placeholder="Will be generated..."
              readOnly
            />
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="reward" className="font-fredoka font-medium">
              Reward
            </label>
            <input
              id="reward"
              name="reward"
              type="text"
              className="border py-1 w-full rounded-lg px-2 text-sm border-gray-500/50"
              placeholder="e.g., $5,000"
            />
          </div>
        </div>
        <button
          type="button"
          className="cursor-pointer hover:opacity-80 rounded-2xl font-fredoka text-white py-1 bg-tomato w-full"
        >
          New suspect
        </button>
      </div>
      <Poster />
    </main>
  );
}
