import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section
      id="cta"
      className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-8 lg:px-16 text-center"
    >
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-gray-900">
          Pronto Para Mudar Sua Vida?
        </h2>

        {/* Subtítulo */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
          Faça como milhares de outras pessoas. Assine nosso produto e tenha
          garantido seus estudos.
        </p>

        {/* Botão */}
        <Button className="w-full sm:w-auto bg-black text-white hover:bg-gray-800 py-2 sm:py-3 px-6 sm:px-20 md:px-32 lg:px-40 rounded-md text-sm sm:text-base">
          Assine Agora
        </Button>

        {/* Texto secundário */}
        <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
          Comece sua assinatura agora mesmo. Cancele quando quiser.
        </p>
      </div>
    </section>
  );
}
