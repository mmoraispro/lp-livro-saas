import { Check } from "lucide-react";
import Image from "next/image";

export default function Funcionamento() {
  return (
    <section
      id="funcionamento"
      className="w-full flex flex-col items-center justify-center py-8 sm:py-16 px-4 sm:px-6"
    >
      <h2 className="font-bold text-2xl sm:text-4xl mt-4 sm:mt-8 text-center">
        Como funciona?
      </h2>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10 mt-8 sm:mt-12">
        <Image
          src={"/woman.svg"}
          alt="Ilustração da seção Como funciona"
          width={392}
          height={392}
          className="w-[250px] sm:w-[300px] md:w-[392px] h-auto"
        />
        
        <ul className="space-y-4 w-full md:w-auto">
          <li className="flex items-center">
            <Check className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 mr-2 sm:mr-4 flex-shrink-0" />
            <span className="text-xl sm:text-2xl md:text-3xl text-gray-500 font-light">
              Acesso a 1 ebook por mês
            </span>
          </li>
          <li className="flex items-center">
            <Check className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 mr-2 sm:mr-4 flex-shrink-0" />
            <span className="text-xl sm:text-2xl md:text-3xl text-gray-500 font-light">
              Curadoria especial
            </span>
          </li>
          <li className="flex items-center">
            <Check className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 mr-2 sm:mr-4 flex-shrink-0" />
            <span className="text-xl sm:text-2xl md:text-3xl text-gray-500 font-light">
              Cancele quando quiser
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
