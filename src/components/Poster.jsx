import { ImageIcon } from "@phosphor-icons/react";

export default function Poster({ suspect }) {
  const empty = !suspect;

  return (
    <div
      className={`mx-auto mt-6  outline-2 outline-dashed outline-black/20 -outline-offset-6  mb-4 w-60 -rotate-3 rounded-xl border-2 px-4 py-4 shadow-lg ${
        empty ? "border-black/20 bg-neutral-100" : "border-black/80 bg-beige"
      }`}
    >
      <div className="absolute bg-dandelion/70 w-16 h-5 -top-3 left-1/2 -translate-x-1/2 rotate-3">
        {" "}
      </div>
      <h2
        className={`mb-5 rounded-md py-0.5 text-center font-chango text-2xl scale-y-140 ${
          empty ? "bg-neutral-300 text-neutral-400" : "bg-tomato text-white"
        }`}
      >
        WANTED
      </h2>

      {empty ? (
        <div className="flex h-28 w-full items-center justify-center rounded-xl bg-neutral-200">
          <ImageIcon size={40} className="text-neutral-400" />
        </div>
      ) : (
        <img
          src={suspect.imageUrl}
          alt={suspect.name}
          className="h-28 w-full rounded-xl bg-white object-contain"
        />
      )}

      {empty ? (
        <>
          <div className="mx-auto my-4 h-6 w-28 rounded bg-neutral-300" />
          <div className="space-y-1.5">
            <div className="h-2.5 w-full rounded bg-neutral-200" />
            <div className="mx-auto h-2.5 w-2/3 rounded bg-neutral-200" />
          </div>
          <div className="mx-auto mt-3 h-12 w-24 -rotate-2 rounded-full bg-neutral-300" />
        </>
      ) : (
        <>
          <h2 className="my-4 text-center font-chango text-xl uppercase scale-y-150">
            {suspect.name}
          </h2>
          <p className="text-center font-fredoka text-xs leading-snug">
            for: {suspect.crime}
          </p>
          <div className="mx-auto mt-3 w-fit -rotate-2 rounded-full bg-dandelion px-5 py-1.5 text-center font-chango">
            <p className="text-[9px] tracking-widest">REWARD</p>
            <p className="text-lg scale-y-125">${suspect.reward}</p>
          </div>
        </>
      )}
    </div>
  );
}
