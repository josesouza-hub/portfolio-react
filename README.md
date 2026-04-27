# 📁 Portfólio Acadêmico - React + IHC

> Projeto desenvolvido para a disciplina de Interação Humano-Computador (IHC)  
> **Curso:** Tecnologia da Informação | **Período:** 2º Semestre  
> **Instituição:** [Nome da Faculdade]  
> **Autor:** [Seu Nome Completo] | [seu.email@faculdade.edu]

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.0.8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![IHC](https://img.shields.io/badge/IHC-WCAG_2.1-AA-blue)](https://www.w3.org/WAI/WCAG21/quickref/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🎯 Objetivo

Este portfólio acadêmico foi desenvolvido para consolidar conhecimentos em **React**, **CSS Modules** e **princípios de Interação Humano-Computador (IHC)**. O sistema apresenta:

- ✅ Navegação fluida entre seções com React Router
- ✅ Layout responsivo (desktop, tablet e mobile)
- ✅ Aplicação de princípios de IHC: hierarquia visual, foco por teclado, contraste WCAG, targets de toque
- ✅ Integração de mídias: imagens, vídeos locais e documentos PDF
- ✅ Estrutura modular e manutenível com componentes reutilizáveis

---

## 🚀 Funcionalidades

| Seção | Descrição |
|-------|-----------|
| 🏠 **Início** | Apresentação pessoal com foto, bio, habilidades e CTAs |
| 🔗 **Projetos** | Cards visuais com prints, descrição e links para repositórios GitHub |
| 🎬 **Vídeos** | Player HTML5 com vídeos locais em `public/assets/` |
| 📄 **Apresentações** | Lista de slides/PDFs com thumbnails e links diretos |
| 🌙 **Tema** | Cores neutras e alto contraste (pronto para dark mode futuro) |

---

## 🛠️ Tecnologias Utilizadas

```bash
• React 18.2.0          # Biblioteca de interface
• Vite 8.0.8            # Build tool e servidor de desenvolvimento
• React Router DOM 6.x  # Navegação entre rotas
• CSS Modules           # Estilização escopada por componente
• HTML5 Semantic        # Acessibilidade e SEO básico
• Git/GitHub            # Versionamento e colaboração

📁 Estrutura do Projeto

portfolio-react/
├── public/
│   └── assets/              # Imagens, vídeos e PDFs estáticos
│       ├── foto-perfil.jpg
│       ├── demo-apresentacao.mp4
│       ├── thumb-*.jpg
│       └── slides-*.pdf
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Navbar.jsx + .module.css
│   │   └── ThemeToggle.jsx  # (opcional)
│   ├── pages/               # Páginas/rotas principais
│   │   ├── Home.jsx + .module.css
│   │   ├── Projects.jsx + .module.css
│   │   ├── Videos.jsx + .module.css
│   │   └── PPTs.jsx + .module.css
│   ├── hooks/               # Hooks personalizados (ex: useTheme)
│   ├── App.jsx              # Configuração de rotas
│   ├── main.jsx             # Ponto de entrada
│   └── index.css            # Variáveis CSS e reset global
├── .gitignore               # Arquivos ignorados pelo Git
├── package.json             # Dependências e scripts
├── vite.config.js           # Configuração do Vite
└── README.md                # Este arquivo

▶️ Como Executar Localmente
Pré-requisitos
Node.js ≥ 18.x (baixar)
npm ≥ 9.x (vem com Node)
Git instalado

▶️ Passos

# 1. Clone ou extraia o projeto
git clone https://github.com/josesouza/portfolio-react.git
cd portfolio-react

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev

# 4. Acesse no navegador
http://localhost:5173/


🔗 Acessar pelo celular (mesma rede Wi-Fi)
# Inicie expondo na rede local:
npm run dev -- --host

# No celular, acesse o IP mostrado no terminal:
http://192.168.X.X:5173/

💡 Dica: Se o navegador mobile alertar "não seguro", clique em "Avançado" → "Acessar mesmo assim". É seguro para testes em rede local.


