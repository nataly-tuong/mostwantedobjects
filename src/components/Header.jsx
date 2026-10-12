import { MagnifyingGlassIcon } from "@phosphor-icons/react";

export default function Header() {
  return (
    <header className="flex py-3 gap-0.5 flex-1 items-center justify-center">
      <MagnifyingGlassIcon size={30} />
      <h1 className="text-3xl -mr-[4.5em] font-chango origin-left scale-x-65">
        mostwantedobjects
      </h1>
    </header>
  );
}
