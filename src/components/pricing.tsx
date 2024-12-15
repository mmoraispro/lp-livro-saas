import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-texture w-full flex flex-col items-center justify-center py-8 sm:py-12 md:py-16"
    >
      <div className="flex flex-col justify-center items-center max-w-4xl px-4 sm:px-6 md:px-8">
        {/* Título */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 text-center">
          Preço Simples e Transparente
        </h2>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-8 text-center px-4">
          Pra que inúmeros planos quando nós sabemos exatamente o que é melhor
          para você?
          <br className="hidden sm:block" />
          Assine o nosso plano mensal
          <span className="text-blue-600 font-medium"> Pro Premium VIP</span> e
          garanta mensalmente um ebook novo de programação. Sai por menos de um
          café por dia.
        </p>

        {/* Card do Plano */}
        <div className="bg-white shadow-md rounded-lg w-full max-w-[320px] sm:max-w-md mx-auto p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Plano Pro Premium VIP</h3>
          <p className="text-gray-500 mb-4 text-xs sm:text-sm">
            Tudo que você precisa para seus estudos
          </p>

          {/* Preço */}
          <div className="text-gray-900 text-3xl sm:text-4xl font-bold mb-4">
            R$29<span className="text-base sm:text-lg font-medium">/mês</span>
          </div>

          {/* Lista de Benefícios */}
          <ul className="text-left space-y-2 mb-6">
            <li className="flex items-center text-gray-700 text-sm sm:text-base">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2" />1 ebook por mês
            </li>
            <li className="flex items-center text-gray-700 text-sm sm:text-base">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2" />
              Curadoria especial
            </li>
            <li className="flex items-center text-gray-700 text-sm sm:text-base">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2" />
              Acesso ilimitado
            </li>
            <li className="flex items-center text-gray-700 text-sm sm:text-base">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2" />
              Cancele a qualquer momento
            </li>
          </ul>

          {/* Botão */}
          <Button className="w-full bg-black text-white hover:bg-gray-800 text-sm sm:text-base py-2 sm:py-3">
            Assine Agora
          </Button>
        </div>
      </div>
    </section>
  );
}
