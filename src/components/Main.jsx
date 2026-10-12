export default function Main() {
  return (
    <main className="px-6 flex flex-col gap-3">
      <form>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col flex-2">
            <label htmlfor="crime" className="font-fredoka font-medium">
              Crime
            </label>
            <input
              id="crime"
              name="crime"
              aria-label="Crime will be generated (readonly)"
              type="text"
              className="border py-1 w-full rounded-lg px-2 text-sm border-gray-500/50"
              placeholder="Will be generated..."
              readOnly
            />
          </div>
          <div className="flex flex-col flex-1 ml-5">
            <label htmlfor="reward" className="font-fredoka font-medium">
              Reward
            </label>
            <input
              id="reward"
              name="reward"
              aria-label="Add a reward"
              type="text"
              className="border py-1 w-full rounded-lg px-2 text-sm border-gray-500/50"
              placeholder="e.g., $5,000"
            />
          </div>
        </div>
      </form>
    </main>
  );
}
