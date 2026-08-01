/**
 * Script de Interatividade, Filtro de Categorias e Multilíngue (PT / EN)
 * Estrutura Suíça Minimalista Focada em Projetos para Pedro Peixoto
 */

const translations = {
  pt: {
    skip_to_content: "Pular para o conteúdo",
    nav_about: "Sobre",
    nav_work: "Trabalhos",
    nav_contact: "Contato",
    hero_h1: "Pedro Peixoto é Desenvolvedor de IA & Automação na HCLB Advogados",
    hero_p: "Bacharel em Direito e desenvolvedor, focado na construção de aplicações web, automações no n8n e agentes de IA integrados a bancos de dados e LLMs. Histórico de redução de tempo operacional em 90% e 70% na perda de prazos.",
    hero_cta_work: "Ver trabalhos",
    hero_cta_resume: "Perfil LinkedIn",
    hero_cta_cv: "Currículo (PDF)",
    about_label: "SOBRE MIM",
    about_title: "Conectando o Direito à Tecnologia com Inteligência Artificial e Automação de Alta Performance",
    about_p: "Atuo no desenvolvimento de soluções tecnológicas estratégicas para o setor jurídico e empresarial. Minha abordagem une a visão analítica do Direito com a eficiência de workflows orquestrados no n8n, agentes de inteligência artificial generativa e inteligência de dados (Power BI e SQL). Construo ferramentas focadas em resolver gargalos operacionais reais e eliminar tarefas repetitivas.",
    work_label: "PROJETOS SELECIONADOS",
    work_title: "Cases & Aplicações em Destaque",
    work_subtitle: "Resumos de projetos desenvolvidos. Clique nos botões de ação para acessar o código ou material completo.",
    filter_all: "Todos",
    filter_ai: "IA & LLMs",
    filter_n8n: "Automação & RPA",
    filter_web: "Desenvolvimento Web",
    case_1_role: "Projeto Pessoal • Desenvolvedor Web",
    case_1_h3: "Gerenciador de Links TRT & Autenticação A1 OTP",
    case_1_p: "Desenvolvimento de uma aplicação web em Next.js para centralização e acesso rápido aos 24 Tribunais Regionais do Trabalho (TRT 1 ao 24 e TST). Integração de gerador de tokens TOTP/2FA em tempo real (RFC 6238) para autenticação segura com Certificados Digitais A1.",
    case_1_action: "Ver no GitHub",
    case_2_role: "HCLB Advogados • Desenvolvedor de IA & Automação",
    case_2_h3: "Automação de Diários da Justiça & Cruzamento ERP",
    case_2_p: "Criação de workflow orquestrado no n8n para captura diária automatizada de diários unificados da Justiça, sincronização de dados entre ERP e banco PostgreSQL (Supabase), reduzindo em 90% o tempo da rotina operacional.",
    case_2_action: "Ver Case em Produção",
    case_3_role: "HCLB Advogados • Desenvolvedor de IA & Automação",
    case_3_h3: "Agentes de IA para Minuta de Contratos & Peças",
    case_3_p: "Desenvolvimento de Agentes de Inteligência Artificial para geração e validação automatizada de minutas contratuais padronizadas.",
    case_3_action: "Solicitar Acesso",
    case_4_role: "Automação & RPA • Desenvolvedor Python",
    case_4_h3: "Emissão Automatizada de GRUs Trabalhistas",
    case_4_p: "Desenvolvimento de solução em Python, Pandas e banco de dados para emissão automatizada de Guias de Recolhimento da União (GRUs) da Justiça do Trabalho. A ferramenta extraía e preenchia todos os dados necessários inserindo apenas o número do processo (desenvolvido para o portal antigo, atualmente descontinuado).",
    case_4_action: "Sistema Descontinuado",
    contact_label: "CONTATO",
    contact_title: "Vamos conversar sobre o seu próximo projeto?",
    contact_link_cv: "Currículo (PDF)",
    contact_link_linkedin: "Perfil no LinkedIn",
    contact_link_github: "Perfil no GitHub",
    contact_link_email: "Enviar E-mail",
    copyright_text: `© ${new Date().getFullYear()} Pedro Peixoto. Todos os direitos reservados.`
  },
  en: {
    skip_to_content: "Skip to content",
    nav_about: "About",
    nav_work: "Work",
    nav_contact: "Contact",
    hero_h1: "Pedro Peixoto is an AI & Automation Developer at HCLB Advogados",
    hero_p: "Bachelor of Laws and developer, focused on building web applications, n8n automations, and AI agents integrated with databases and LLMs. Proven track record of 90% operational time reduction and 70% deadline loss reduction.",
    hero_cta_work: "View work",
    hero_cta_resume: "LinkedIn Profile",
    hero_cta_cv: "Resume (PDF)",
    about_label: "ABOUT",
    about_title: "Connecting Law to Technology with High-Performance AI & Automation",
    about_p: "I specialize in developing strategic technology solutions for legal and enterprise operations. My approach combines the analytical background of Law with the efficiency of n8n-orchestrated workflows, generative AI agents, and data intelligence (Power BI & SQL). I build tools focused on solving real operational bottlenecks and eliminating repetitive tasks.",
    work_label: "SELECTED WORK",
    work_title: "Featured Cases & Applications",
    work_subtitle: "Summaries of key projects. Click action buttons to view full project materials or repository code.",
    filter_all: "All",
    filter_ai: "AI & LLMs",
    filter_n8n: "Automation & RPA",
    filter_web: "Web Development",
    case_1_role: "Personal Project • Web Developer",
    case_1_h3: "TRT Links Manager & A1 Digital Certificate OTP",
    case_1_p: "Development of a Next.js web application for centralizing and enabling fast access to Brazil's 24 Regional Labor Courts (TRT 1 to 24 & TST). Integrated real-time TOTP/2FA token generator (RFC 6238) for secure A1 Digital Certificate authentication.",
    case_1_action: "View on GitHub",
    case_2_role: "HCLB Advogados • AI & Automation Developer",
    case_2_h3: "Court Gazette Automation & ERP Cross-Referencing",
    case_2_p: "Built an orchestrated n8n workflow for automated daily extraction of unified court publication gazettes, syncing data between legal ERP and PostgreSQL (Supabase), cutting routine operational time by 90%.",
    case_2_action: "View Live System",
    case_3_role: "HCLB Advogados • AI & Automation Developer",
    case_3_h3: "AI Agents for Contract & Legal Document Drafting",
    case_3_p: "Development of Artificial Intelligence Agents for automated generation and validation of standardized contract drafts.",
    case_3_action: "Request Access",
    case_4_role: "Automation & RPA • Python Developer",
    case_4_h3: "Automated Labor GRU Issuance System",
    case_4_p: "Development of a Python, Pandas, and database solution for automated issuance of Labor Union Collection Guides (GRUs). The tool auto-filled all required tax and case data using only the lawsuit number (developed for the legacy court portal, currently discontinued).",
    case_4_action: "Legacy System / Discontinued",
    contact_label: "CONTACT",
    contact_title: "Let's talk about your next project",
    contact_link_cv: "Resume (PDF)",
    contact_link_linkedin: "LinkedIn Profile",
    contact_link_github: "GitHub Profile",
    contact_link_email: "Send Email",
    copyright_text: `© ${new Date().getFullYear()} Pedro Peixoto. All rights reserved.`
  }
};

let currentLang = 'pt';

function updateLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('pedro_portfolio_lang', lang);

  document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');

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
        activeSpanEn.className = 'lang-en text-[#666666]';
      } else {
        activeSpanPt.className = 'lang-pt text-[#666666]';
        activeSpanEn.className = 'lang-en font-semibold text-[#121212]';
      }
    }
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('pedro_portfolio_lang') || 'pt';
  updateLanguage(savedLang);

  const langBtns = document.querySelectorAll('.lang-toggle-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const nextLang = currentLang === 'pt' ? 'en' : 'pt';
      updateLanguage(nextLang);
    });
  });

  // Filtro de Projetos por Categoria
  const filterButtons = document.querySelectorAll('.category-filter-btn');
  const projectCards = document.querySelectorAll('.project-case-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-category');

      filterButtons.forEach(b => {
        b.classList.remove('bg-[#121212]', 'text-white');
        b.classList.add('bg-white', 'text-[#555555]', 'border', 'border-[#E4E4E7]');
      });

      btn.classList.remove('bg-white', 'text-[#555555]', 'border', 'border-[#E4E4E7]');
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
