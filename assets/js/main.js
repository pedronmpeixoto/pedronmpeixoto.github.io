/**
 * Script de Interatividade, Filtro de Categorias e Multilíngue (PT / EN)
 * Estrutura Suíça Minimalista Focada em Projetos para Pedro Peixoto
 */

const translations = {
  pt: {
    skip_to_content: "Pular para o conteúdo",
    nav_about: "sobre",
    nav_work: "trabalhos",
    nav_contact: "contato",
    hero_role: "// Desenvolvedor de IA & Automação @ HCLB Advogados",
    hero_p: "Bacharel em Direito que virou dev. Construo aplicações web, automações no n8n e agentes de IA ligados a bancos de dados e LLMs. Já reduzi em 90% o tempo operacional e em 70% a perda de prazos.",
    hero_cta_work: "ver trabalhos",
    hero_cta_resume: "linkedin",
    hero_cta_cv: "currículo.pdf",
    photo_alt: "Pedro Peixoto sorrindo na arquibancada de um estádio antes de um show do Oasis",
    photo_caption: "// fora do código: show do Oasis, 2025",
    about_label: "// sobre mim",
    about_title: "Do Direito para o código, sem largar nenhum dos dois.",
    about_p: "Me formei em Direito e descobri que o que eu mais gostava era resolver os gargalos do dia a dia do escritório. Hoje junto as duas coisas: workflows no n8n, agentes de IA generativa e dados (Power BI e SQL) para tirar do caminho as tarefas repetitivas de quem trabalha com processos.",
    code_k_education: "formacao",
    code_v_education: "\"Direito (UNIFOR)\"",
    code_k_now: "hoje",
    code_v_now: "\"IA & Automação @ HCLB Advogados\"",
    code_k_results: "resultados",
    code_k_time: "tempoOperacional",
    code_k_deadlines: "prazosPerdidos",
    code_k_offline: "foraDoCodigo",
    code_v_offline: "\"show de rock no estádio\"",
    work_label: "// projetos selecionados",
    work_title: "Cases & aplicações",
    work_subtitle: "Resumos do que construí. Os botões levam ao código, à demo ou ao case completo.",
    filter_all: "--all",
    filter_n8n: "--automacao",
    filter_web: "--web",
    case_1_role: "Projeto Pessoal • Desenvolvedor Web",
    case_1_h3: "Gerenciador de Links TRT & Autenticação A1 OTP",
    case_1_p: "Desenvolvimento de uma aplicação web em Next.js para centralização e acesso rápido aos 24 Tribunais Regionais do Trabalho (TRT 1 ao 24 e TST). Integração de gerador de tokens TOTP/2FA em tempo real (RFC 6238) para autenticação segura com Certificados Digitais A1.",
    case_1_demo: "abrir demo",
    case_1_action: "ver no github",
    case_2_role: "HCLB Advogados • Desenvolvedor de IA & Automação",
    case_2_h3: "Automação de Diários da Justiça & Cruzamento ERP",
    case_2_p: "Workflow no n8n que substituiu a conferência manual, processo por processo, das publicações do DJEN com a base do ERP (Supabase/PostgreSQL). Construído com apoio de IA, roda todo dia às 05:00, tem retentativa e alertas, e conta com uma demo interativa com dados fictícios.",
    case_2_action: "ver case e demo",
    case_4_role: "Automação & RPA • Desenvolvedor Python",
    case_4_h3: "Emissão Automatizada de GRUs Trabalhistas",
    case_4_p: "Desenvolvimento de solução em Python, Pandas e banco de dados para emissão automatizada de Guias de Recolhimento da União (GRUs) da Justiça do Trabalho. A ferramenta extraía e preenchia todos os dados necessários inserindo apenas o número do processo (desenvolvido para o portal antigo, atualmente descontinuado).",
    case_4_action: "sistema descontinuado",
    contact_label: "// contato",
    contact_title: "Vamos conversar sobre o seu próximo projeto?",
    contact_link_cv: "currículo.pdf",
    contact_link_linkedin: "linkedin",
    contact_link_github: "github",
    contact_link_email: "enviar e-mail",
    footer_built: "feito à mão, linha por linha",
    copyright_text: `© ${new Date().getFullYear()} Pedro Peixoto. Todos os direitos reservados.`
  },
  en: {
    skip_to_content: "Skip to content",
    nav_about: "about",
    nav_work: "work",
    nav_contact: "contact",
    hero_role: "// AI & Automation Developer @ HCLB Advogados",
    hero_p: "Law graduate turned developer. I build web apps, n8n automations and AI agents wired to databases and LLMs. I've cut operational time by 90% and missed deadlines by 70%.",
    hero_cta_work: "view work",
    hero_cta_resume: "linkedin",
    hero_cta_cv: "resume.pdf",
    photo_alt: "Pedro Peixoto smiling in a stadium stand before an Oasis concert",
    photo_caption: "// away from the keyboard: Oasis live, 2025",
    about_label: "// about me",
    about_title: "From Law to code, without leaving either behind.",
    about_p: "I graduated in Law and found out that what I enjoyed most was fixing the day-to-day bottlenecks of the firm. Today I bring both together: n8n workflows, generative AI agents and data (Power BI and SQL) to clear repetitive work out of the way of people who deal with lawsuits.",
    code_k_education: "education",
    code_v_education: "\"Law (UNIFOR)\"",
    code_k_now: "now",
    code_v_now: "\"AI & Automation @ HCLB Advogados\"",
    code_k_results: "results",
    code_k_time: "operationalTime",
    code_k_deadlines: "missedDeadlines",
    code_k_offline: "awayFromKeyboard",
    code_v_offline: "\"rock shows at the stadium\"",
    work_label: "// selected work",
    work_title: "Cases & applications",
    work_subtitle: "Summaries of what I've built. The buttons lead to the code, the demo or the full case study.",
    filter_all: "--all",
    filter_n8n: "--automation",
    filter_web: "--web",
    case_1_role: "Personal Project • Web Developer",
    case_1_h3: "TRT Links Manager & A1 Digital Certificate OTP",
    case_1_p: "Development of a Next.js web application for centralizing and enabling fast access to Brazil's 24 Regional Labor Courts (TRT 1 to 24 & TST). Integrated real-time TOTP/2FA token generator (RFC 6238) for secure A1 Digital Certificate authentication.",
    case_1_demo: "open demo",
    case_1_action: "view on github",
    case_2_role: "HCLB Advogados • AI & Automation Developer",
    case_2_h3: "Court Gazette Automation & ERP Cross-Referencing",
    case_2_p: "n8n workflow that replaced the manual, case-by-case check of DJEN court publications against the firm ERP database (Supabase/PostgreSQL). Built with AI assistance, it runs daily at 05:00 with retries and alerts, and comes with an interactive demo using mock data.",
    case_2_action: "view case & demo",
    case_4_role: "Automation & RPA • Python Developer",
    case_4_h3: "Automated Labor GRU Issuance System",
    case_4_p: "Development of a Python, Pandas, and database solution for automated issuance of Labor Union Collection Guides (GRUs). The tool auto-filled all required tax and case data using only the lawsuit number (developed for the legacy court portal, currently discontinued).",
    case_4_action: "legacy / discontinued",
    contact_label: "// contact",
    contact_title: "Let's talk about your next project",
    contact_link_cv: "resume.pdf",
    contact_link_linkedin: "linkedin",
    contact_link_github: "github",
    contact_link_email: "send email",
    footer_built: "handmade, line by line",
    copyright_text: `© ${new Date().getFullYear()} Pedro Peixoto. All rights reserved.`
  }
};

let currentLang = 'pt';

function updateLanguage(lang) {
  currentLang = lang;
  try { localStorage.setItem('pedro_portfolio_lang', lang); } catch (e) {}

  document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');

  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    if (translations[lang] && translations[lang][key]) el.setAttribute('alt', translations[lang][key]);
  });

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  const langBtns = document.querySelectorAll('.lang-toggle-btn');
  langBtns.forEach(btn => {
    const activeSpanPt = btn.querySelector('.lang-pt');
    const activeSpanEn = btn.querySelector('.lang-en');
    if (activeSpanPt && activeSpanEn) {
      if (lang === 'pt') {
        activeSpanPt.className = 'lang-pt font-semibold text-[#121212]';
        activeSpanEn.className = 'lang-en text-[#6B6B70]';
      } else {
        activeSpanPt.className = 'lang-pt text-[#6B6B70]';
        activeSpanEn.className = 'lang-en font-semibold text-[#121212]';
      }
    }
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let savedLang = 'pt';
  try { savedLang = localStorage.getItem('pedro_portfolio_lang') || 'pt'; } catch (e) {}
  updateLanguage(savedLang);

  const langBtns = document.querySelectorAll('.lang-toggle-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const nextLang = currentLang === 'pt' ? 'en' : 'pt';
      updateLanguage(nextLang);
    });
  });

  runTerminalIntro();

  // Filtro de Projetos por Categoria
  const filterButtons = document.querySelectorAll('.category-filter-btn');
  const projectCards = document.querySelectorAll('.project-case-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-category');

      filterButtons.forEach(b => {
        b.classList.remove('bg-[#121212]', 'text-white');
        b.classList.add('bg-white', 'text-[#4B4B4F]', 'border', 'border-[#E4E4E7]');
      });

      btn.classList.remove('bg-white', 'text-[#4B4B4F]', 'border', 'border-[#E4E4E7]');
      btn.classList.add('bg-[#121212]', 'text-white');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-categories') || '';
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

/**
 * Intro do hero: digita console.log("Pedro Peixoto") no terminal e,
 * ao "dar Enter", imprime o nome. Depois revela o resto do hero.
 * Com prefers-reduced-motion, mostra tudo direto.
 */
function runTerminalIntro() {
  const cmd = document.getElementById('type-cmd');
  const out = document.getElementById('type-out');
  const caretCmd = document.getElementById('caret-cmd');
  const caretOut = document.getElementById('caret-out');
  const reveals = Array.from(document.querySelectorAll('.reveal'))
    .sort((a, b) => (+a.dataset.reveal || 0) - (+b.dataset.reveal || 0));

  const showRest = (instant) => {
    reveals.forEach((el, i) => {
      if (instant) el.classList.add('is-in');
      else setTimeout(() => el.classList.add('is-in'), 160 + i * 140);
    });
  };

  if (!cmd || !out) { showRest(true); return; }

  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) { showRest(true); return; }

  // Guarda os tokens coloridos e esvazia o terminal
  const tokens = Array.from(cmd.children).map(t => ({ cls: t.className, text: t.textContent }));
  const name = out.textContent;
  cmd.textContent = '';
  out.textContent = '';
  caretOut.hidden = true;
  caretCmd.hidden = false;
  caretCmd.classList.add('is-typing');

  const queue = [];
  tokens.forEach(tok => {
    const span = document.createElement('span');
    span.className = tok.cls;
    cmd.appendChild(span);
    for (const ch of tok.text) queue.push({ span, ch });
  });

  let i = 0;
  const typeNext = () => {
    if (i >= queue.length) {
      caretCmd.classList.remove('is-typing');
      setTimeout(enter, 520);
      return;
    }
    const { span, ch } = queue[i++];
    span.textContent += ch;
    // ritmo humano: mais lento em pontuação, variação aleatória
    const base = /[."()]/.test(ch) ? 110 : 62;
    setTimeout(typeNext, base + Math.random() * 55);
  };

  const enter = () => {
    caretCmd.hidden = true;
    out.textContent = name;
    caretOut.hidden = false;
    showRest(false);
  };

  setTimeout(typeNext, 450);
}
