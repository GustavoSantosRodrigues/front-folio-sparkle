# 🚀 Portfólio - Gustavo

Portfólio pessoal desenvolvido com foco em performance, organização, componentização e boas práticas com React.

O projeto foi estruturado visando escalabilidade, reutilização de código e clareza arquitetural.

---

## 🛠️ Tecnologias Utilizadas

- ⚛️ React  
- ⚡ Vite  
- 🎯 TypeScript  
- 🎨 Tailwind CSS  
- 🎬 Framer Motion  
- 🎨 Lucide React  
- 🧩 Radix UI (base do shadcn)

---

## 📦 Estrutura do Projeto

```
src/
├── app/                 # Estrutura principal da aplicação
├── components/          # Componentes reutilizáveis
│   ├── About/
│   ├── Contact/
│   └── ui/
├── lib/                 # Configurações reutilizáveis (ex: animações)
├── types/               # Tipagens globais
└── styles/              # Estilos globais
```

---

## 🎬 Sistema de Animações

As animações são centralizadas em:

```
src/lib/animations.ts
```

Exemplo:

```ts
import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};
```

Isso garante:

- Consistência visual  
- Reutilização  
- Fácil manutenção  
- Código mais limpo nos componentes  

---

## 🧩 Organização e Boas Práticas

O projeto segue alguns princípios importantes:

- Separação de responsabilidades  
- Componentes reutilizáveis  
- Tipagens centralizadas  
- Animações reutilizáveis  
- Estrutura preparada para crescimento  

---

## ⚡ Performance

- Build otimizado com Vite  
- Hot Module Replacement (HMR) rápido  
- Estrutura modular  
- Animações performáticas com Framer Motion  

---

## ▶️ Como rodar o projeto

Instale as dependências:

```bash
npm install
```

Depois execute:

```bash
npm run dev
```

Acesse no navegador:

```
http://localhost:5173
```

---

## 🎯 Objetivo do Projeto

Demonstrar domínio em:

- Arquitetura de Front-End  
- Organização de código  
- Reutilização e escalabilidade  
- UI moderna com animações suaves  
- TypeScript aplicado corretamente  

---

Desenvolvido por Gustavo.
