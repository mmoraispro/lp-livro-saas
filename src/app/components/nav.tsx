"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative">
      <button
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      <ul
        className={`
          flex items-center gap-4
          md:flex-row md:relative md:opacity-100 md:pointer-events-auto
          ${
            isMenuOpen
              ? "flex-col absolute right-0 top-10 bg-white shadow-lg rounded-lg p-4 min-w-[200px]"
              : "hidden md:flex"
          }
        `}
      >
        <li className="w-full md:w-auto">
          <Link 
            href={"#funcionamento"} 
            className="block py-2 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Funcionamento
          </Link>
        </li>
        <li className="w-full md:w-auto">
          <Link 
            href={"#pricing"} 
            className="block py-2 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Preço
          </Link>
        </li>
        <li className="w-full md:w-auto">
          <Button 
            variant="outline" 
            className="w-full md:w-auto"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Button>
        </li>
      </ul>
    </nav>
  );
}
