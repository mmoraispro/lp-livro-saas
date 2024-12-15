import Nav from "./nav";
import Link from "next/link";
import Logo from "@/components/logo";

export default function Header() {
  return (
    <header className="flex flex-row justify-center items-center h-16 sm:h-20 absolute top-0 left-0 w-full z-10 px-4 sm:px-6">
      <div className="container flex w-full justify-between items-center max-w-screen-2xl">
        <Link href={"/"}>
          <Logo />
        </Link>
        <Nav />
      </div>
    </header>
  );
}
