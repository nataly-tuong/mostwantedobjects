import { MagnifyingGlassIcon } from "@phosphor-icons/react";

export default function Header() {
  return (
    <header className="mb-10 flex bg-linear-to-r from-tomato-dark to-tomato py-3 gap-0.5 flex-1 items-center justify-center">
      <MagnifyingGlassIcon size={30} className="text-white" />
      <h1 className="text-3xl text-white mr-[-4.5em] font-chango origin-left scale-x-65">
        mostwantedobjects
      </h1>
    </header>
  );
}
