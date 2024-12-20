import CallToAction from "@/components/cta";
import Funcionamento from "@/components/funcionamento";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="flex flex-col items-center justify-center w-full">
        <Funcionamento />
        <Pricing />
        <CallToAction />
      </main>
    </>
  );
}
