import { MagnifyingGlassIcon } from "@phosphor-icons/react";

export default function Header() {
  return (
    <header className="flex gap-0.5 flex-1 items-center justify-center">
      <MagnifyingGlassIcon size={30} />
      <h1 className="text-3xl font-bold">mostwantedobjects</h1>
    </header>
  );
}
