/**
 * Portfólio de Pedro Peixoto: idiomas (PT / EN), intro do terminal, REPL do hero,
 * foto em ASCII, revelações no scroll, barra de status e filtro de projetos.
 */

const translations = {
  pt: {
    skip_to_content: "Pular para o conteúdo",
    nav_about: "sobre",
    nav_work: "trabalhos",
    nav_contact: "contato",
    hero_role: "// Desenvolvedor de IA & Automação @ HCLB Advogados",
    hero_p: "Bacharel em Direito que virou dev. Construo aplicações web, automações no n8n e agentes de IA ligados a bancos de dados e LLMs. Já reduzi em 90% o tempo operacional.",
    hero_cta_work: "ver trabalhos",
    hero_cta_resume: "linkedin",
    hero_cta_cv: "currículo.pdf",
    photo_alt: "Pedro Peixoto sorrindo na arquibancada de um estádio antes de um show do Oasis",
    photo_caption: "// fora do código: show do Oasis, 2025",
    about_label: "cat sobre.md",
    term_aria: "Terminal interativo: digite um comando, por exemplo help()",
    term_try: "// tenta:",
    chip_about: "sobre()",
    chip_work: "projetos()",
    chip_contact: "contato()",
    ascii_title: "Alternar modo ASCII",
    sb_hint: "terminal",
    about_title: "Direito e TI",
    about_p: "Me formei em Direito e descobri que o que eu mais gostava era resolver os gargalos do dia a dia do escritório. Hoje junto as duas coisas: workflows no n8n, agentes de IA generativa e dados (Power BI e SQL) para tirar do caminho as tarefas repetitivas de quem trabalha com processos.",
    code_k_education: "formacao",
    code_v_education: "\"Direito (UNIFOR)\"",
    code_k_now: "hoje",
    code_v_now: "\"IA & Automação @ HCLB Advogados\"",
    code_k_results: "resultados",
    code_k_time: "tempoOperacional",
    code_k_offline: "foraDoCodigo",
    code_v_offline: "\"show de rock no estádio\"",
    work_label: "ls -la projetos/",
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
    contact_label: "./contato.sh --agora",
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
    hero_p: "Law graduate turned developer. I build web apps, n8n automations and AI agents wired to databases and LLMs. I've cut operational time by 90%.",
    hero_cta_work: "view work",
    hero_cta_resume: "linkedin",
    hero_cta_cv: "resume.pdf",
    photo_alt: "Pedro Peixoto smiling in a stadium stand before an Oasis concert",
    photo_caption: "// away from the keyboard: Oasis live, 2025",
    about_label: "cat about.md",
    term_aria: "Interactive terminal: type a command, for example help()",
    term_try: "// try:",
    chip_about: "about()",
    chip_work: "projects()",
    chip_contact: "contact()",
    ascii_title: "Toggle ASCII mode",
    sb_hint: "terminal",
    about_title: "Law and IT",
    about_p: "I graduated in Law and found out that what I enjoyed most was fixing the day-to-day bottlenecks of the firm. Today I bring both together: n8n workflows, generative AI agents and data (Power BI and SQL) to clear repetitive work out of the way of people who deal with lawsuits.",
    code_k_education: "education",
    code_v_education: "\"Law (UNIFOR)\"",
    code_k_now: "now",
    code_v_now: "\"AI & Automation @ HCLB Advogados\"",
    code_k_results: "results",
    code_k_time: "operationalTime",
    code_k_offline: "awayFromKeyboard",
    code_v_offline: "\"rock shows at the stadium\"",
    work_label: "ls -la projects/",
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
    contact_label: "./contact.sh --now",
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

  const dict = translations[lang] || {};
  [['data-i18n-alt', 'alt'], ['data-i18n-aria', 'aria-label'], ['data-i18n-title', 'title']].forEach(([attr, target]) => {
    document.querySelectorAll('[' + attr + ']').forEach(el => {
      const key = el.getAttribute(attr);
      if (dict[key]) el.setAttribute(target, dict[key]);
    });
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    const pt = btn.querySelector('.lang-pt');
    const en = btn.querySelector('.lang-en');
    if (!pt || !en) return;
    pt.className = 'lang-pt ' + (lang === 'pt' ? 'font-semibold text-[#121212]' : 'text-[#6B6B70]');
    en.className = 'lang-en ' + (lang === 'en' ? 'font-semibold text-[#121212]' : 'text-[#6B6B70]');
  });

  // Comandos digitados: a animação em CSS precisa saber quantos caracteres tem
  document.querySelectorAll('.cmd-typed').forEach(el => {
    el.style.setProperty('--n', Array.from(el.textContent.trim()).length);
  });

  const sbLang = document.getElementById('sb-lang');
  if (sbLang) sbLang.textContent = lang === 'pt' ? 'pt-BR' : 'en-US';
  document.dispatchEvent(new CustomEvent('pedro:lang'));

  if (window.lucide) window.lucide.createIcons();
}

const prefersReducedMotion = () =>
  !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

document.addEventListener('DOMContentLoaded', () => {
  let savedLang = 'pt';
  try { savedLang = localStorage.getItem('pedro_portfolio_lang') || 'pt'; } catch (e) {}
  updateLanguage(savedLang === 'en' ? 'en' : 'pt');

  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => updateLanguage(currentLang === 'pt' ? 'en' : 'pt'));
  });

  const ascii = initAsciiPhoto();
  initRepl(ascii);
  runTerminalIntro(ascii);
  initScrollReveal();
  initStatusBar();
  initProjectFilter();
});

/* ------------------------------------------------------------------ */
/* Filtro de projetos por categoria                                    */
/* ------------------------------------------------------------------ */
function initProjectFilter() {
  const filterButtons = document.querySelectorAll('.category-filter-btn');
  const projectCards = document.querySelectorAll('.project-case-card');
  const off = ['bg-white', 'text-[#4B4B4F]', 'border', 'border-[#E4E4E7]'];
  const on = ['bg-[#121212]', 'text-white'];

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-category');
      filterButtons.forEach(b => { b.classList.remove(...on); b.classList.add(...off); });
      btn.classList.remove(...off);
      btn.classList.add(...on);

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-categories') || '';
        card.style.display = (filter === 'all' || categories.includes(filter)) ? 'block' : 'none';
      });
    });
  });
}

/* ------------------------------------------------------------------ */
/* Intro do hero: digita console.log("Pedro Peixoto") e imprime o nome */
/* Clique ou tecla durante a digitação pula direto para o final.       */
/* ------------------------------------------------------------------ */
function runTerminalIntro(ascii) {
  const cmd = document.getElementById('type-cmd');
  const out = document.getElementById('type-out');
  const caretCmd = document.getElementById('caret-cmd');
  const caretOut = document.getElementById('caret-out');
  const reveals = Array.from(document.querySelectorAll('.reveal'))
    .sort((a, b) => (+a.dataset.reveal || 0) - (+b.dataset.reveal || 0));

  const showRest = (instant) => {
    reveals.forEach((el, i) => {
      if (instant) el.classList.add('is-in');
      else setTimeout(() => el.classList.add('is-in'), 160 + i * 130);
    });
    if (ascii) ascii.decode(instant ? 0 : 1100);
  };

  if (!cmd || !out) { showRest(true); return; }
  if (prefersReducedMotion()) { showRest(true); return; }

  const tokens = Array.from(cmd.children).map(t => ({ cls: t.className, text: t.textContent }));
  const name = out.textContent;
  const h1 = out.parentElement;
  const term = document.getElementById('hero-term');

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
  let timer = null;
  let done = false;

  const finish = () => {
    if (done) return;
    done = true;
    clearTimeout(timer);
    for (; i < queue.length; i++) queue[i].span.textContent += queue[i].ch;
    caretCmd.hidden = true;
    out.textContent = name;
    caretOut.hidden = false;
    h1.classList.add('is-printed');
    showRest(false);
    term.removeEventListener('pointerdown', finish);
    document.removeEventListener('keydown', finish);
  };

  const typeNext = () => {
    if (done) return;
    if (i >= queue.length) {
      caretCmd.classList.remove('is-typing');
      timer = setTimeout(finish, 520);
      return;
    }
    const { span, ch } = queue[i++];
    span.textContent += ch;
    const base = /[."()]/.test(ch) ? 110 : 62; // mais lento na pontuação
    timer = setTimeout(typeNext, base + Math.random() * 55);
  };

  term.addEventListener('pointerdown', finish);
  document.addEventListener('keydown', finish);
  timer = setTimeout(typeNext, 450);
}

/* ------------------------------------------------------------------ */
/* Foto em ASCII: desenha a foto com caracteres num <canvas> por cima  */
/* da imagem e "decodifica" de cima para baixo.                        */
/* ------------------------------------------------------------------ */
function initAsciiPhoto() {
  const wrap = document.getElementById('photo-wrap');
  const img = document.getElementById('photo-img');
  const canvas = document.getElementById('photo-ascii');
  const toggle = document.getElementById('ascii-toggle');
  if (!wrap || !img || !canvas) return null;

  const COLS = 48, ROWS = 60;
  const RAMP = ' .:-~+=*xX#%@';
  let scanTimer = null;

  const draw = () => {
    try {
      const cell = canvas.width / COLS;
      const off = document.createElement('canvas');
      off.width = COLS; off.height = ROWS;
      const octx = off.getContext('2d', { willReadFrequently: true });
      octx.drawImage(img, 0, 0, COLS, ROWS);
      const data = octx.getImageData(0, 0, COLS, ROWS).data;

      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#0E1013';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = '700 ' + Math.round(cell * 1.05) + 'px "JetBrains Mono", ui-monospace, Menlo, monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (let y = 0; y < ROWS; y++) {
        for (let x = 0; x < COLS; x++) {
          const p = (y * COLS + x) * 4;
          const r = data[p], g = data[p + 1], b = data[p + 2];
          const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
          // gama < 1 clareia os tons médios; a densidade do caractere carrega a luz
          const ch = RAMP[Math.min(RAMP.length - 1, Math.floor(Math.pow(lum, 0.8) * RAMP.length))];
          if (ch === ' ') continue;
          // cor: mais saturada e normalizada para ficar viva no fundo escuro
          const gray = lum * 255;
          const sat = 2.1;
          let cr = gray + (r - gray) * sat, cg = gray + (g - gray) * sat, cb = gray + (b - gray) * sat;
          const scale = (140 + 115 * lum) / Math.max(1, cr, cg, cb);
          cr = Math.max(0, Math.min(255, cr * scale));
          cg = Math.max(0, Math.min(255, cg * scale));
          cb = Math.max(0, Math.min(255, cb * scale));
          ctx.fillStyle = 'rgb(' + (cr | 0) + ',' + (cg | 0) + ',' + (cb | 0) + ')';
          ctx.fillText(ch, x * cell + cell / 2, y * cell + cell / 2);
        }
      }
      wrap.classList.add('ascii-ready');
      return true;
    } catch (e) {
      return false; // ex.: página aberta via file:// (canvas "tainted")
    }
  };

  const imgLoaded = new Promise(resolve => {
    if (img.complete && img.naturalWidth) resolve();
    else { img.addEventListener('load', resolve, { once: true }); img.addEventListener('error', resolve, { once: true }); }
  });
  const fontsLoaded = (document.fonts && document.fonts.load)
    ? Promise.race([document.fonts.load('700 30px "JetBrains Mono"'), new Promise(r => setTimeout(r, 1500))]).catch(() => {})
    : Promise.resolve();

  const ready = Promise.all([imgLoaded, fontsLoaded]).then(() => {
    const ok = !!img.naturalWidth && draw();
    if (!ok && toggle) toggle.hidden = true;
    return ok;
  });

  const scan = () => {
    wrap.classList.add('scanning');
    clearTimeout(scanTimer);
    scanTimer = setTimeout(() => wrap.classList.remove('scanning'), 1800);
  };

  const api = {
    isOn: false,
    available: ready,
    set(on) {
      api.isOn = !!on;
      if (!prefersReducedMotion()) scan();
      wrap.classList.toggle('decoded', !api.isOn);
      if (toggle) toggle.setAttribute('aria-pressed', String(api.isOn));
    },
    decode(delay) {
      ready.then(() => setTimeout(() => api.set(false), delay || 0));
    }
  };

  if (toggle) toggle.addEventListener('click', () => api.set(!api.isOn));
  return api;
}

/* ------------------------------------------------------------------ */
/* REPL do hero: comandos de mentira que respondem com o conteúdo real */
/* ------------------------------------------------------------------ */
const replText = {
  pt: {
    help: [
      ['sobre()', 'quem sou eu'],
      ['projetos()', 'o que construí'],
      ['stack()', 'minhas ferramentas'],
      ['contato()', 'onde me achar'],
      ['cv()', 'currículo em PDF'],
      ['foto()', 'foto em ASCII'],
      ['lang("en")', 'switch to English'],
      ['clear()', 'limpa a tela']
    ],
    about: ['Bacharel em Direito que virou dev.', 'Hoje: IA & Automação na HCLB Advogados.'],
    more: 'ler mais ↓',
    projects: [
      { name: 'Gerenciador de Links TRT', links: [['demo', 'projetos/gerenciador/demo/', true], ['github', 'https://github.com/pedronmpeixoto/gerenciador', true]] },
      { name: 'Diários da Justiça × ERP', links: [['case', 'projetos/diarios-djen/index.html', false]] },
      { name: 'GRUs Trabalhistas', note: '// descontinuado' }
    ],
    all: 'ver todos ↓',
    cv: '// abrindo curriculo-pedro-peixoto.pdf',
    open: 'abrir ↗',
    hire: '// boa escolha. abrindo seu e-mail…',
    asciiOn: '// modo ASCII: on',
    asciiOff: '// modo ASCII: off',
    asciiNo: '// modo ASCII indisponível neste navegador',
    sudo: '// aqui todo mundo já é root. tenta help()',
    hint: '// tenta help()'
  },
  en: {
    help: [
      ['about()', 'who I am'],
      ['projects()', 'what I built'],
      ['stack()', 'my toolbox'],
      ['contact()', 'where to find me'],
      ['cv()', 'resume as PDF'],
      ['photo()', 'photo in ASCII'],
      ['lang("pt")', 'mudar para português'],
      ['clear()', 'clear the screen']
    ],
    about: ['Law graduate turned developer.', 'Now: AI & Automation at HCLB Advogados.'],
    more: 'read more ↓',
    projects: [
      { name: 'TRT Links Manager', links: [['demo', 'projetos/gerenciador/demo/', true], ['github', 'https://github.com/pedronmpeixoto/gerenciador', true]] },
      { name: 'Court Gazettes × ERP', links: [['case', 'projetos/diarios-djen/index.html', false]] },
      { name: 'Labor GRU Issuance', note: '// discontinued' }
    ],
    all: 'see all ↓',
    cv: '// opening curriculo-pedro-peixoto.pdf',
    open: 'open ↗',
    hire: '// good call. opening your e-mail…',
    asciiOn: '// ASCII mode: on',
    asciiOff: '// ASCII mode: off',
    asciiNo: '// ASCII mode unavailable in this browser',
    sudo: '// everyone is root here already. try help()',
    hint: '// try help()'
  }
};

const replAliases = {
  help: 'help', ajuda: 'help', man: 'help',
  sobre: 'about', about: 'about', whoami: 'about',
  projetos: 'projects', projects: 'projects', trabalhos: 'projects', work: 'projects', ls: 'projects',
  stack: 'stack', skills: 'stack',
  contato: 'contact', contact: 'contact',
  cv: 'cv', curriculo: 'cv', resume: 'cv',
  foto: 'photo', photo: 'photo', ascii: 'photo',
  lang: 'lang', idioma: 'lang',
  clear: 'clear', cls: 'clear', limpar: 'clear',
  contratar: 'hire', hire: 'hire'
};

function initRepl(ascii) {
  const form = document.getElementById('term-form');
  const input = document.getElementById('term-in');
  const log = document.getElementById('term-log');
  const mode = document.getElementById('sb-mode');
  if (!form || !input || !log) return;

  const EMAIL = 'pedroiran1996@gmail.com';
  const CV = 'curriculo-pedro-peixoto.pdf';
  const STACK = ['n8n', 'Next.js', 'Python', 'Supabase', 'SQL', 'LLMs'];
  const history = [];
  let hIdx = 0;

  const T = () => replText[currentLang] || replText.pt;

  const el = (tag, cls, text) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  };
  const line = (cls, text) => { const p = el('p', 'term-line ' + (cls || ''), text); log.appendChild(p); return p; };
  const link = (text, href, external) => {
    const a = el('a', '', text);
    a.href = href;
    if (external) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    return a;
  };
  const runBtn = (text) => { const b = el('button', 'term-link', text); b.type = 'button'; b.dataset.run = text; return b; };
  const str = (text) => el('span', 'tok-str', "'" + text + "'");
  const punc = (text) => el('span', 'tok-punc', text);

  const commands = {
    help() {
      T().help.forEach(([cmd, desc]) => {
        const p = line();
        p.append('  ', runBtn(cmd), ' '.repeat(Math.max(1, 12 - cmd.length)), el('span', 'term-dim', desc));
      });
    },
    about() {
      T().about.forEach(text => line().append(str(text)));
      line().append(link(T().more, '#about'));
    },
    projects() {
      line().append(punc('['));
      T().projects.forEach(proj => {
        const p = line();
        p.append('  ', str(proj.name));
        (proj.links || []).forEach(([label, href, external]) => p.append(' ', link(label, href, external)));
        if (proj.note) p.append(' ', el('span', 'term-dim', proj.note));
      });
      const last = line();
      last.append(punc(']'), ' ', link(T().all, '#work'));
    },
    stack() {
      const p = line();
      p.append(punc('[ '));
      STACK.forEach((item, idx) => { p.append(str(item)); if (idx < STACK.length - 1) p.append(punc(', ')); });
      p.append(punc(' ]'));
    },
    contact() {
      line().append(punc('{'));
      const row = (key, node) => { const p = line(); p.append('  ', el('span', 'tok-fn', key), punc(': '), node); };
      row('email', link(EMAIL, 'mailto:' + EMAIL));
      row('linkedin', link('/in/pedronpeixoto', 'https://www.linkedin.com/in/pedronpeixoto', true));
      row('github', link('@pedronmpeixoto', 'https://github.com/pedronmpeixoto', true));
      line().append(punc('}'));
    },
    cv() {
      const p = line('term-dim', T().cv + ' ');
      p.append(link(T().open, CV, true));
      window.open(CV, '_blank', 'noopener');
    },
    hire() {
      const p = line('term-ok', T().hire + ' ');
      p.append(link(EMAIL, 'mailto:' + EMAIL));
      window.location.href = 'mailto:' + EMAIL;
    },
    photo() {
      if (!ascii) { line('term-dim', T().asciiNo); return; }
      ascii.available.then(ok => {
        if (!ok) { line('term-dim', T().asciiNo); return; }
        ascii.set(!ascii.isOn);
        line('term-ok', ascii.isOn ? T().asciiOn : T().asciiOff);
      });
    },
    lang(arg) {
      const next = (arg === 'pt' || arg === 'en') ? arg : (currentLang === 'pt' ? 'en' : 'pt');
      updateLanguage(next);
      line().append(str(next));
    },
    clear() { log.replaceChildren(); }
  };

  const run = (raw) => {
    const text = raw.trim().replace(/;+$/, '');
    if (!text) return;
    history.push(text);
    hIdx = history.length;

    const echo = line('term-echo');
    echo.append(el('span', 'term-prompt', '>'), ' ' + text);

    const logCall = text.match(/^console\.(?:log|info|warn|error)\(\s*(["'`])(.*)\1\s*\)$/);
    const call = text.match(/^([A-Za-z_$][\w$]*)\s*(?:\(\s*(?:(["'`]?)([^"'`()]*)\2)?\s*\))?$/);

    if (logCall) {
      line('', logCall[2]);
      line('term-dim', 'undefined');
    } else if (/^sudo\b/i.test(text)) {
      line('term-dim', T().sudo);
    } else if (call && replAliases[call[1].toLowerCase()]) {
      commands[replAliases[call[1].toLowerCase()]]((call[3] || '').trim().toLowerCase());
    } else {
      const ident = text.match(/^[A-Za-z_$][\w$]*/);
      line('term-err', ident
        ? 'Uncaught ReferenceError: ' + ident[0] + ' is not defined'
        : 'Uncaught SyntaxError: Invalid or unexpected token');
      line('term-dim', T().hint);
    }

    // Mantém o início da resposta visível quando ela é maior que a área do log
    if (echo.isConnected) log.scrollTop = echo.offsetTop;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value;
    input.value = '';
    run(value);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' && history.length) {
      e.preventDefault();
      hIdx = Math.max(0, hIdx - 1);
      input.value = history[hIdx];
    } else if (e.key === 'ArrowDown' && history.length) {
      e.preventDefault();
      hIdx = Math.min(history.length, hIdx + 1);
      input.value = history[hIdx] || '';
    } else if (e.key === 'Tab' && input.value.trim()) {
      const start = input.value.trim().toLowerCase();
      const match = T().help.map(h => h[0]).find(c => c.toLowerCase().startsWith(start));
      if (match) { e.preventDefault(); input.value = match; }
    } else if (e.key === 'Escape') {
      input.blur();
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      commands.clear();
    }
  });

  // Chips e comandos clicáveis dentro do help()
  const term = document.getElementById('hero-term');
  term.addEventListener('click', (e) => {
    const chip = e.target.closest('.term-chip, [data-run]');
    if (chip) { run(chip.dataset.run || chip.textContent); return; }
    // Clique em área "vazia" do terminal foca a entrada (como num terminal de verdade)
    if (!e.target.closest('a, button, input') && !String(window.getSelection())) {
      input.focus({ preventScroll: true });
    }
  });

  if (mode) {
    input.addEventListener('focus', () => { mode.textContent = 'INSERT'; mode.classList.add('is-insert'); });
    input.addEventListener('blur', () => { mode.textContent = 'NORMAL'; mode.classList.remove('is-insert'); });
  }

  // Atalho "/" leva ao terminal
  document.addEventListener('keydown', (e) => {
    if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey) return;
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) return;
    e.preventDefault();
    term.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'center' });
    input.focus({ preventScroll: true });
  });
}

/* ------------------------------------------------------------------ */
/* Revelação no scroll (.sr e .sr-lines)                                */
/* ------------------------------------------------------------------ */
function initScrollReveal() {
  document.querySelectorAll('.sr-lines').forEach(group => {
    Array.from(group.children).forEach((child, i) => child.style.setProperty('--i', i));
  });

  const targets = document.querySelectorAll('.sr, .sr-lines');
  if (!targets.length) return;
  if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
    targets.forEach(el => el.classList.add('in-view'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  targets.forEach(el => io.observe(el));
}

/* ------------------------------------------------------------------ */
/* Barra de status: "arquivo" da seção atual e posição na página       */
/* ------------------------------------------------------------------ */
function initStatusBar() {
  const file = document.getElementById('sb-file');
  const pos = document.getElementById('sb-pos');
  const progress = document.getElementById('sb-progress');
  if (!file || !pos || !progress) return;

  const sections = [
    ['hero', { pt: 'index.js', en: 'index.js' }],
    ['about', { pt: 'sobre.md', en: 'about.md' }],
    ['work', { pt: 'projetos/', en: 'projects/' }],
    ['contact', { pt: 'contato.sh', en: 'contact.sh' }]
  ].map(([id, names]) => ({ el: document.getElementById(id), names })).filter(s => s.el);

  let ticking = false;
  const update = () => {
    ticking = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    progress.style.transform = 'scaleX(' + p + ')';
    pos.textContent = p <= 0.005 ? 'Top' : p >= 0.995 ? 'Bot' : Math.round(p * 100) + '%';

    const probe = window.scrollY + window.innerHeight * 0.45;
    let current = sections[0];
    sections.forEach(s => { if (s.el.offsetTop <= probe) current = s; });
    if (current) file.textContent = '~/pedro/' + (current.names[currentLang] || current.names.pt);
  };
  const request = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };

  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request);
  document.addEventListener('pedro:lang', request);
  update();
}
