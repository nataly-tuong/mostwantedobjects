import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";

export default function App() {
  return (
    <div className="flex flex-col gap-8 min-h-screen bg-[radial-gradient(#0000001f_1px,transparent_1px)] bg-size-[16px_16px]">
      <Header />
      <Main />
    </div>
  );
}
