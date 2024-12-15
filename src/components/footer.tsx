import Logo from "@/components/logo";

export default function Footer() {
  return (
    <footer className="bg-white py-4 sm:py-6 md:py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Logo e nome */}
        <div className="flex items-center justify-center mb-3 sm:mb-4">
          <Logo />
        </div>

        {/* Texto de direitos autorais */}
        <p className="text-xs sm:text-sm text-gray-500">
          © 2024 LivroSaaS. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
