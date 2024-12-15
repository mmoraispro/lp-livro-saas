import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white py-4 sm:py-6 md:py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Logo e nome */}
        <div className="flex items-center justify-center mb-3 sm:mb-4">
          <Image
            src="/Logo.svg"
            alt="Logo LivroSaaS"
            width={129}
            height={40}
            className="w-24 sm:w-28 md:w-32 h-auto mr-2"
          />
        </div>

        {/* Texto de direitos autorais */}
        <p className="text-xs sm:text-sm text-gray-500">
          © 2024 LivroSaaS. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
