import Image from "next/image";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="flex flex-row justify-center items-center h-16 sm:h-20 absolute top-0 left-0 w-full z-10 px-4 sm:px-6">
      <div className="container flex w-full justify-between items-center max-w-screen-2xl">
        <Image
          src={"/Logo.svg"}
          alt="Logo da empresa"
          width={129}
          height={40}
          className="w-[100px] sm:w-[129px] h-auto"
          priority
        />
        <Nav />
      </div>
    </header>
  );
}
