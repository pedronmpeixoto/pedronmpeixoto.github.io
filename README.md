# 🚀 Portfólio Profissional | Pedro Peixoto

> **Desenvolvedor de IA & Automação** | Bacharel em Direito & Estudante de ADS (UNIFOR)

Este é o repositório do portfólio profissional de **Pedro Peixoto**, publicado e hospedado via **GitHub Pages**.

🌐 **Acesse o site no ar**: [https://pedronmpeixoto.github.io](https://pedronmpeixoto.github.io)

---

## 🛠️ Tecnologias & Destaques

- **HTML5 Semântico & Tailwind CSS (Play CDN)**: visual de terminal, com JetBrains Mono (Google Fonts) e intro animada que digita `console.log("Pedro Peixoto")`.
- **Terminal interativo**: depois da intro, o hero vira um REPL (`help()`, `sobre()`, `projetos()`, `stack()`, `contato()`, `cv()`, `foto()`, `lang("en")`, `clear()`); a tecla `/` leva até ele.
- **Foto em ASCII**: a foto é desenhada em caracteres num `<canvas>` e "decodifica" para a imagem; o botão `ascii` alterna os modos.
- **Barra de status** no rodapé (estilo vim/tmux) com a seção atual e a posição na página.
- **Ícones**: [Lucide Icons](https://lucide.dev/).
- **Bilíngue**: alternância PT/EN feita em JavaScript puro, sem dependências.
- **Projetos em Destaque**:
  1. ⚖️ **Gerenciador de Links TRT & Certificado Digital A1 OTP** (Next.js + TOTP 2FA): [Repositório](https://github.com/pedronmpeixoto/gerenciador)
  2. ⚡ **Automação de Diários da Justiça & Cruzamento ERP** (n8n + Supabase PostgreSQL): [Case completo](https://pedronmpeixoto.github.io/projetos/diarios-djen/), com diagrama interativo
  3. 📄 **Emissão Automatizada de GRUs Trabalhistas** (Python + Pandas + Banco de Dados + RPA)
- **Design 100% Responsivo**: otimizado para celular, tablet e telas grandes.

---

## 📂 Estrutura dos Arquivos

```
pedronmpeixoto.github.io/
├── index.html                      # Página principal
├── curriculo-pedro-peixoto.pdf     # Currículo (fica na raiz para não quebrar links já compartilhados)
├── curriculo/
│   └── gerar_curriculo.py          # Conteúdo do currículo e script que gera o PDF acima
├── projetos/
│   └── diarios-djen/
│       └── index.html              # Case: Automação de Diários da Justiça & Cruzamento ERP
├── assets/
│   ├── css/
│   │   ├── styles.css              # Estilos globais (tipografia, botões, cards, badges)
│   │   └── case-study.css          # Estilos das páginas de case (diagramas e anexos)
│   ├── js/
│   │   ├── tailwind.config.js      # Configuração do Tailwind compartilhada entre as páginas
│   │   ├── main.js                 # Tradução PT/EN, filtro de projetos e ícones
│   │   └── case-study.js           # Diagrama interativo das páginas de case
│   └── img/                        # Logos (HCLB, UNIFOR)
├── .editorconfig                   # Padrão de formatação (UTF-8, 2 espaços)
├── .gitignore
├── .nojekyll                       # Publica o site como HTML estático, sem processamento do Jekyll
└── README.md
```

### Convenções

- Páginas novas de projeto ficam em `projetos/<nome-do-projeto>/index.html`, o que gera URLs limpas como `/projetos/diarios-djen/`.
- CSS, JavaScript e imagens ficam em `assets/`, separados por tipo.
- Textos traduzíveis usam o atributo `data-i18n` e ficam no objeto `translations` de `assets/js/main.js`.
- Nenhuma credencial, senha ou dado interno do escritório entra no repositório.

### Atualizando o currículo

O conteúdo do currículo fica em `curriculo/gerar_curriculo.py`. Depois de editar, gere o PDF de novo:

```
pip install "reportlab>=4.2"
python curriculo/gerar_curriculo.py
```

### Rodando localmente

Não há build. Basta abrir o `index.html` no navegador ou, para simular o GitHub Pages, servir a pasta:

```
python -m http.server 8000
```

e acessar `http://localhost:8000`.

---

## 👤 Autor

**Pedro Peixoto**
- 🌐 **Site / Portfólio**: [pedronmpeixoto.github.io](https://pedronmpeixoto.github.io)
- 👔 **LinkedIn**: [in/pedronpeixoto](https://www.linkedin.com/in/pedronpeixoto)
- 📧 **E-mail**: pedroiran1996@gmail.com
- 🐙 **GitHub**: [@pedronmpeixoto](https://github.com/pedronmpeixoto)
