export default function Main() {
  return (
    <main className="px-6 flex flex-col gap-3">
      <form>
        <div className="flex flex-col">
          <label htmlfor="crime" className="font-fredoka font-medium">
            Crime
          </label>
          <input
            id="crime"
            name="crime"
            aria-label="Add a crime"
            type="text"
            className="border max-w-3xs rounded-lg px-2 text-sm border-gray-500/50"
            placeholder="Will be generated..."
            readOnly
          />
        </div>
      </form>
    </main>
  );
}
