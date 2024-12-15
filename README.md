# LivroSaaS - Landing Page com Next.js

Este é um projeto desenvolvido como parte do desafio [Landing Page SaaS com Next.js](https://github.com/codante-io/mp-saas-landing-page-com-nextjs) do Codante.

## 🚀 Tecnologias Utilizadas

- Next.js 15.1.0
- React 19
- TypeScript
- Tailwind CSS
- Shadcn/ui
- Lucide Icons

## 💻 Sobre o Projeto

LivroSaaS é uma landing page fictícia para um serviço de assinatura de ebooks de programação. O projeto foi desenvolvido utilizando as melhores práticas de desenvolvimento web moderno, incluindo:

- Design responsivo
- Componentes reutilizáveis
- Tipografia otimizada com Next/font
- Interface moderna e clean
- Animações suaves

## 🎯 Funcionalidades

- Header com navegação responsiva
- Seção Hero com formulário de captura
- Seção "Como funciona"
- Seção de Preços
- Call-to-action (CTA)
- Footer

## 🚀 Como Executar

1. Clone o repositório
2. Instale as dependências:

```powershell
cd lp-livro-saas
npm install
```

3. Execute o servidor de desenvolvimento:

```powershell
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📝 Estrutura do Projeto

O projeto segue a estrutura padrão do Next.js 15.1.0 com App Router:

```
src/
├── app/
│   ├── components/
│   │   ├── hero.tsx
│   │   ├── funcionamento.tsx
│   │   ├── pricing.tsx
│   │   ├── cta.tsx
│   │   └── ...
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
└── lib/
    └── utils.ts
```

## 🎨 Customização

O projeto utiliza Tailwind CSS para estilização e pode ser customizado através dos arquivos:

- `tailwind.config.ts` - Configurações do Tailwind
- `src/app/globals.css` - Estilos globais
- `components.json` - Configurações do shadcn/ui

## 📄 Licença

Este projeto está sob a licença MIT.

---

Desenvolvido como parte do desafio [Landing Page SaaS com Next.js](https://github.com/codante-io/mp-saas-landing-page-com-nextjs) do Codante.
