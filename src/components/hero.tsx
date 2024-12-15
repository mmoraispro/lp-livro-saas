import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] bg-texture w-full flex flex-col items-center justify-center px-4 py-20 md:py-32">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 px-4">
          Simplifique Seus Estudos
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mt-5 px-4">
          Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e
          receba todos os meses um ebook novo de programação.
        </p>
      </div>
      <div className="flex flex-col w-full max-w-[412px] mt-10 md:mt-20 px-4">
        <form className="mt-6 flex flex-col md:flex-row justify-center gap-3">
          <Input
            className="bg-white w-full"
            type="email"
            placeholder="Coloque seu e-mail"
          />
          <Button className="w-full md:w-auto">Assine Agora</Button>
        </form>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Comece sua assinatura agora mesmo. Cancele quando quiser.
        </p>
      </div>
    </section>
  );
}
