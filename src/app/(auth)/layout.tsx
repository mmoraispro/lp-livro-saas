import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-texture flex flex-col items-center justify-center py-40">
      <Link href={"/"}>
        <Logo />
      </Link>
      {children}
    </section>
  );
}
