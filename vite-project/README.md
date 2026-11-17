# Coffee Delivery

SPA de e-commerce fictício para cafeteria, feita com React, TypeScript e Vite como projeto final da disciplina SPA.

A especificação do projeto (PRD, TECH, TASKS e registro de uso de IA) está em [coffee-delivery-spec/](./coffee-delivery-spec/).

## Requisitos

- Node.js 20+ (testado com Node 22.11)
- npm 10+

## Scripts

```bash
npm install        # instala dependências
npm run dev        # servidor de desenvolvimento
npm run build      # typecheck + build de produção
npm run preview    # serve o build local
npm run lint       # ESLint
npm run typecheck  # tsc sem emitir arquivos
```

## Branding com IA

- **Nome da marca:** Coffee Delivery
- **Conceito:** xícara de café cujo vapor forma um pin de localização — café quentinho entregue onde você estiver.
- **Ferramenta de IA utilizada:** Claude Code (modelo Claude Opus 5.5), gerando SVG vetorial.
- **Prompt utilizado:** "Crie uma logo SVG original e simples para a cafeteria Coffee Delivery: uma xícara amarela (#DBAC2C) sobre um pires roxo, cujo vapor forma um pin de localização roxo (#8047F8). Deve funcionar em 16px e ter variação para fundo escuro."
- **Proposta escolhida:** símbolo de xícara + pin de localização, com o nome em Baloo 2 ao lado.
- **Justificativa da escolha:** comunica café e entrega em um único ícone, é legível em tamanho pequeno e, por ser vetorial, não perde qualidade.
