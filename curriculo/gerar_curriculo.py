"""Gera o currículo em PDF (português ou inglês) a partir do conteúdo abaixo.

Uso:
    pip install "reportlab>=4.2"
    python curriculo/gerar_curriculo.py            # português -> curriculo-pedro-peixoto.pdf
    python curriculo/gerar_curriculo.py en         # inglês    -> curriculo-pedro-peixoto-en.pdf
    python curriculo/gerar_curriculo.py en saida.pdf  # grava em outro caminho

Para atualizar o currículo, edite o dicionário CONTEUDO e rode de novo.
Mantenha as duas versões com as mesmas datas e os mesmos itens.
"""

import os
import sys

from reportlab.lib.colors import HexColor, black
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

# --------------------------------------------------------------------------
# CONTEÚDO
# --------------------------------------------------------------------------

NOME = "Pedro Peixoto"
LINKS = [
    ("pedronmpeixoto.github.io", "https://pedronmpeixoto.github.io"),
    ("linkedin.com/in/pedronpeixoto", "https://www.linkedin.com/in/pedronpeixoto"),
    ("github.com/pedronmpeixoto", "https://github.com/pedronmpeixoto"),
]
LINK_CASE = ('<a href="https://pedronmpeixoto.github.io/projetos/diarios-djen/">'
             "pedronmpeixoto.github.io/projetos/diarios-djen</a>")
LINK_GERENCIADOR = ('<a href="https://github.com/pedronmpeixoto/gerenciador">'
                    "github.com/pedronmpeixoto/gerenciador</a>")

CONTEUDO = {
    # ------------------------------------------------------------------ PT
    "pt": {
        "arquivo": "curriculo-pedro-peixoto.pdf",
        "titulo_pdf": "Currículo - Pedro Peixoto",
        "assunto": "Desenvolvedor de IA e Automação",
        "cargo": "Desenvolvedor de IA & Automação",
        "contato": ["(85) 99622-2252", "pedroiran1996@gmail.com", "Fortaleza, CE"],
        "rotulos": {
            "resumo": "Resumo profissional",
            "experiencias": "Experiências",
            "projetos": "Projetos",
            "educacao": "Educação",
            "certificados": "Certificados",
            "competencias": "Competências",
            "idiomas": "Idiomas",
            "stack": "Tech Stack",
        },
        "resumo": (
            "Desenvolvedor de IA e automação, formado em Direito. Atuei mais de quatro anos na "
            "controladoria jurídica do escritório onde trabalho antes de migrar para a TI. "
            "Construo automações no n8n integradas a APIs e bancos de dados, agentes de IA que "
            "geram documentos e aplicações web. Curso Análise e Desenvolvimento de Sistemas na "
            "UNIFOR."
        ),
        # Da mais recente para a mais antiga (pela data de início).
        "experiencias": [
            {
                "empresa": "HCLB Advogados",
                "local": "Fortaleza, CE, Brasil",
                "cargo": "Desenvolvedor de IA & Automação",
                "periodo": "Mai 2026 - Atual",
                "itens": [
                    "Fluxo no n8n que busca todo dia as publicações do Diário de Justiça "
                    "Eletrônico Nacional (DJEN), atualiza a base do sistema do escritório no "
                    "Supabase (PostgreSQL) e cruza as duas fontes. O tempo da conferência caiu 90%.",
                    "Fluxo que coloca na frente da fila as publicações trabalhistas com prazo "
                    "mais curto.",
                    "Agentes de IA que geram contratos e documentos padronizados, o que reduziu o "
                    "número de assinaturas de LLM no escritório.",
                    "Aplicação web de gestão de projetos com React, JavaScript e banco de dados.",
                    "Integrações com APIs REST, Gmail e Microsoft 365.",
                ],
                "stack": "n8n, JavaScript, PostgreSQL (Supabase), React, Next.js, Claude Code, "
                "Google AI Studio, Git, GitHub.",
            },
            {
                "empresa": "Singular Facilities",
                "local": "Fortaleza, CE, Brasil",
                "cargo": "Analista Controller",
                "periodo": "Ago 2025 - Nov 2025",
                "itens": [
                    "Rotinas de ETL: extração, tratamento e carga de dados operacionais.",
                    "Dashboards em Power BI para acompanhamento da operação.",
                    "Cadastro de processos no sistema e acompanhamento processual.",
                ],
                "stack": "Power BI, DAX, SQL, Excel.",
            },
            {
                "empresa": "HCLB Advogados",
                "local": "Fortaleza, CE, Brasil",
                "cargo": "Assistente de Controladoria Jurídica",
                "periodo": "Ago 2023 - Jun 2026",
                "itens": [
                    "Análise e acompanhamento de processos trabalhistas.",
                    "Análise de publicações e agendamento de prazos.",
                    "Melhoria dos fluxos de trabalho da controladoria e desenvolvimento de "
                    "ferramentas internas.",
                ],
            },
            {
                "empresa": "HCLB Advogados",
                "local": "Fortaleza, CE, Brasil",
                "cargo": "Auxiliar de Controladoria Jurídica",
                "periodo": "Jan 2022 - Ago 2023",
                "itens": [
                    "Cadastro de processos nos sistemas Legal One e Lysis.",
                    "Leitura de intimações e análise de publicações.",
                    "Protocolo de petições e emissão de guias judiciais (PJe, e-SAJ, Projudi).",
                ],
            },
            {
                "empresa": "Estágios na área jurídica",
                "local": "Fortaleza, CE, Brasil",
                "cargo": "Estagiário",
                "periodo": "Abr 2017 - Jan 2022",
                "itens": [
                    "Rocha, Marinho e Sales Advogados (Out 2020 - Jan 2022).",
                    "Tribunal de Justiça do Ceará (Jun 2018 - Jun 2020).",
                    "Banco do Nordeste do Brasil (Abr 2017 - Abr 2019).",
                ],
            },
        ],
        "projetos": [
            "<b>Automação de Diários da Justiça e cruzamento com o ERP</b> (n8n, Supabase, "
            "PostgreSQL, APIs REST). Roda todo dia às 05:00, com retentativa e alertas. Case e "
            "demonstração em " + LINK_CASE + ".",
            "<b>Gerenciador de links dos TRTs com autenticação em dois fatores</b> (Next.js, "
            "JavaScript, Tailwind CSS). Acesso aos 24 TRTs e ao TST e gerador de códigos TOTP "
            "(RFC 6238) para certificado digital A1. Código em " + LINK_GERENCIADOR + ".",
            "<b>Emissão automática de GRUs trabalhistas</b> (Python, Pandas, SQL). Preenchia a "
            "guia a partir do número do processo. Feito para o portal antigo, hoje desativado.",
        ],
        "educacao": [
            "<b>Análise e Desenvolvimento de Sistemas -</b> Universidade de Fortaleza "
            "(2026 - cursando)",
            "<b>Bacharelado em Direito -</b> Universidade de Fortaleza (2014 - 2021)",
        ],
        "certificados": [
            "<b>Introduction to Model Context Protocol -</b> Anthropic (2026)",
            "<b>Programming with JavaScript -</b> Meta (2026)",
            "<b>Linguagem DAX, Modelagem de Dados, Power Query e Fundamentos de Análise de "
            "Dados -</b> Xperiun (2025)",
        ],
        "competencias": [
            ("Automação & Integrações", "n8n, APIs REST, Evolution API, Gmail API, "
             "Microsoft 365 / Outlook, Auth Basic / OAuth."),
            ("Desenvolvimento Web", "JavaScript, HTML/CSS, React, Next.js, Node.js (básico), "
             "Python (básico)."),
            ("IA", "Claude, Claude Code, Google AI Studio (Gemini), engenharia de prompt, "
             "Model Context Protocol (MCP)."),
            ("Dados & BI", "SQL, Supabase (PostgreSQL), Power BI, DAX, Power Query, ETL, Excel."),
            ("Ferramentas", "Git, GitHub, Windows e Linux Fedora."),
            ("Sistemas Jurídicos", "Legal One, Lysis, PJe, e-SAJ, e-Proc, Projudi."),
        ],
        "idiomas": [("Português", "Nativo."), ("Inglês", "Intermediário.")],
    },
    # ------------------------------------------------------------------ EN
    "en": {
        "arquivo": "curriculo-pedro-peixoto-en.pdf",
        "titulo_pdf": "Resume - Pedro Peixoto",
        "assunto": "AI & Automation Developer",
        "cargo": "AI & Automation Developer",
        "contato": ["+55 85 99622-2252", "pedroiran1996@gmail.com", "Fortaleza, Brazil"],
        "rotulos": {
            "resumo": "Professional summary",
            "experiencias": "Experience",
            "projetos": "Projects",
            "educacao": "Education",
            "certificados": "Certificates",
            "competencias": "Skills",
            "idiomas": "Languages",
            "stack": "Tech Stack",
        },
        "resumo": (
            "AI and automation developer with a law degree. I spent more than four years in the "
            "legal operations team of the law firm where I work before moving into tech. I build "
            "n8n automations integrated with APIs and databases, AI agents that generate "
            "documents, and web applications. I am studying Systems Analysis and Development at "
            "UNIFOR."
        ),
        "experiencias": [
            {
                "empresa": "HCLB Advogados",
                "local": "Fortaleza, Brazil",
                "cargo": "AI & Automation Developer",
                "periodo": "May 2026 - Present",
                "itens": [
                    "n8n workflow that fetches the national court gazette (DJEN) publications "
                    "every day, updates the firm's case database in Supabase (PostgreSQL) and "
                    "cross-checks both sources. The time spent on this check dropped 90%.",
                    "Workflow that puts labor court publications with the shortest deadlines at "
                    "the front of the queue.",
                    "AI agents that generate standard contracts and documents, which reduced the "
                    "number of LLM subscriptions at the firm.",
                    "Project management web application built with React, JavaScript and a "
                    "database.",
                    "Integrations with REST APIs, Gmail and Microsoft 365.",
                ],
                "stack": "n8n, JavaScript, PostgreSQL (Supabase), React, Next.js, Claude Code, "
                "Google AI Studio, Git, GitHub.",
            },
            {
                "empresa": "Singular Facilities",
                "local": "Fortaleza, Brazil",
                "cargo": "Controller Analyst",
                "periodo": "Aug 2025 - Nov 2025",
                "itens": [
                    "ETL routines: extraction, transformation and loading of operational data.",
                    "Power BI dashboards to monitor operations.",
                    "Case registration in the system and case tracking.",
                ],
                "stack": "Power BI, DAX, SQL, Excel.",
            },
            {
                "empresa": "HCLB Advogados",
                "local": "Fortaleza, Brazil",
                "cargo": "Legal Operations Assistant",
                "periodo": "Aug 2023 - Jun 2026",
                "itens": [
                    "Review and tracking of labor lawsuits.",
                    "Review of court publications and deadline scheduling.",
                    "Improvement of the team's workflows and development of internal tools.",
                ],
            },
            {
                "empresa": "HCLB Advogados",
                "local": "Fortaleza, Brazil",
                "cargo": "Junior Legal Operations Assistant",
                "periodo": "Jan 2022 - Aug 2023",
                "itens": [
                    "Case registration in the Legal One and Lysis systems.",
                    "Reading of court notices and review of publications.",
                    "Filing of petitions and issuing of court fee forms (PJe, e-SAJ, Projudi).",
                ],
            },
            {
                "empresa": "Legal internships",
                "local": "Fortaleza, Brazil",
                "cargo": "Intern",
                "periodo": "Apr 2017 - Jan 2022",
                "itens": [
                    "Rocha, Marinho e Sales Advogados (Oct 2020 - Jan 2022).",
                    "Ceará State Court of Justice (Jun 2018 - Jun 2020).",
                    "Banco do Nordeste do Brasil (Apr 2017 - Apr 2019).",
                ],
            },
        ],
        "projetos": [
            "<b>Court gazette automation and ERP cross-check</b> (n8n, Supabase, PostgreSQL, "
            "REST APIs). Runs every day at 5 a.m., with retries and alerts. Case study and demo "
            "at " + LINK_CASE + ".",
            "<b>Labor court links manager with two-factor authentication</b> (Next.js, "
            "JavaScript, Tailwind CSS). Access to Brazil's 24 regional labor courts and the "
            "Superior Labor Court, plus a TOTP code generator (RFC 6238) for the A1 digital "
            "certificate. Code at " + LINK_GERENCIADOR + ".",
            "<b>Automatic issuing of labor court payment forms (GRU)</b> (Python, Pandas, SQL). "
            "Filled in the form from the case number. Built for the old portal, now discontinued.",
        ],
        "educacao": [
            "<b>Systems Analysis and Development -</b> University of Fortaleza "
            "(2026 - in progress)",
            "<b>Bachelor of Laws -</b> University of Fortaleza (2014 - 2021)",
        ],
        "certificados": [
            "<b>Introduction to Model Context Protocol -</b> Anthropic (2026)",
            "<b>Programming with JavaScript -</b> Meta (2026)",
            "<b>DAX, Data Modeling, Power Query and Data Analysis Fundamentals -</b> "
            "Xperiun (2025)",
        ],
        "competencias": [
            ("Automation & Integrations", "n8n, REST APIs, Evolution API, Gmail API, "
             "Microsoft 365 / Outlook, Basic Auth / OAuth."),
            ("Web Development", "JavaScript, HTML/CSS, React, Next.js, Node.js (basic), "
             "Python (basic)."),
            ("AI", "Claude, Claude Code, Google AI Studio (Gemini), prompt engineering, "
             "Model Context Protocol (MCP)."),
            ("Data & BI", "SQL, Supabase (PostgreSQL), Power BI, DAX, Power Query, ETL, Excel."),
            ("Tools", "Git, GitHub, Windows and Fedora Linux."),
            ("Legal Systems", "Legal One, Lysis, PJe, e-SAJ, e-Proc, Projudi."),
        ],
        "idiomas": [("Portuguese", "Native."), ("English", "Intermediate.")],
    },
}

# --------------------------------------------------------------------------
# LAYOUT (mesmo visual do currículo anterior: preto e cinza, títulos sublinhados)
# --------------------------------------------------------------------------

CINZA = HexColor("#444444")
MARGEM_X = 24 * mm
LARGURA = A4[0] - 2 * MARGEM_X - 12  # o quadro do reportlab tem 6pt de respiro de cada lado


def registrar_fontes():
    """Usa Arial quando disponível (macOS/Windows); senão, Helvetica padrão do PDF."""
    pastas = [
        "/System/Library/Fonts/Supplemental",
        "/Library/Fonts",
        "C:/Windows/Fonts",
        "/usr/share/fonts/truetype/msttcorefonts",
    ]
    for pasta in pastas:
        normal = os.path.join(pasta, "Arial.ttf")
        negrito = os.path.join(pasta, "Arial Bold.ttf")
        if not os.path.exists(negrito):
            negrito = os.path.join(pasta, "arialbd.ttf")
        if os.path.exists(normal) and os.path.exists(negrito):
            pdfmetrics.registerFont(TTFont("CV", normal))
            pdfmetrics.registerFont(TTFont("CV-Bold", negrito))
            pdfmetrics.registerFontFamily("CV", normal="CV", bold="CV-Bold")
            return "CV", "CV-Bold", "●"
    return "Helvetica", "Helvetica-Bold", "•"


def esc(texto):
    return texto.replace("&", "&amp;")


def montar(saida, idioma="pt"):
    c = CONTEUDO[idioma]
    rot = c["rotulos"]
    fonte, negrito, marcador = registrar_fontes()

    base = ParagraphStyle("base", fontName=fonte, fontSize=10.4, leading=14.6, textColor=black)
    nome = ParagraphStyle("nome", parent=base, fontName=negrito, fontSize=21, leading=25)
    cargo = ParagraphStyle("cargo", parent=base, fontName=negrito, fontSize=11, leading=15,
                           textColor=CINZA)
    contato = ParagraphStyle("contato", parent=base, fontSize=9.6, leading=13.6, textColor=CINZA)
    secao = ParagraphStyle("secao", parent=base, fontName=negrito, fontSize=11, leading=15,
                           spaceBefore=13, spaceAfter=6, keepWithNext=True)
    forte = ParagraphStyle("forte", parent=base, fontName=negrito)
    forte_dir = ParagraphStyle("forte_dir", parent=forte, alignment=TA_RIGHT)
    item = ParagraphStyle("item", parent=base, leftIndent=30, bulletIndent=14,
                          bulletFontName=fonte, bulletFontSize=7.5, spaceAfter=1)
    linha = ParagraphStyle("linha", parent=base, spaceAfter=2)

    def duas_colunas(esquerda, direita):
        tabela = Table(
            [[Paragraph(esc(esquerda), forte), Paragraph(esc(direita), forte_dir)]],
            colWidths=[LARGURA * 0.66, LARGURA * 0.34],
        )
        tabela.setStyle(TableStyle([
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ]))
        return tabela

    def titulo(texto):
        return Paragraph("<u>%s</u>" % esc(texto.upper()), secao)

    def itens(lista):
        return [Paragraph(t if "<" in t else esc(t), item, bulletText=marcador) for t in lista]

    hist = []

    # Cabeçalho
    hist.append(Paragraph(esc(NOME), nome))
    hist.append(Paragraph(esc(c["cargo"].upper()), cargo))
    hist.append(Paragraph(esc("  |  ".join(c["contato"])), contato))
    hist.append(Paragraph(
        "  |  ".join('<a href="%s">%s</a>' % (url, rotulo) for rotulo, url in LINKS), contato))
    hist.append(Spacer(1, 5))
    hist.append(HRFlowable(width="100%", thickness=0.9, color=CINZA, spaceAfter=2))

    hist.append(titulo(rot["resumo"]))
    hist.append(Paragraph(esc(c["resumo"]), base))

    hist.append(titulo(rot["experiencias"]))
    for i, exp in enumerate(c["experiencias"]):
        bloco = []
        if i:
            bloco.append(Spacer(1, 8))
        bloco.append(duas_colunas(exp["empresa"], exp["local"]))
        bloco.append(duas_colunas(exp["cargo"], exp["periodo"]))
        bloco.append(Spacer(1, 2))
        bloco.extend(itens(exp["itens"]))
        if exp.get("stack"):
            bloco.append(Paragraph(esc(rot["stack"] + ": " + exp["stack"]), forte))
        hist.append(KeepTogether(bloco))

    hist.append(titulo(rot["projetos"]))
    hist.extend(itens(c["projetos"]))

    hist.append(titulo(rot["educacao"]))
    hist.extend(Paragraph(t, linha) for t in c["educacao"])

    hist.append(titulo(rot["certificados"]))
    hist.extend(Paragraph(t, linha) for t in c["certificados"])

    hist.append(KeepTogether(
        [titulo(rot["competencias"])]
        + [Paragraph("<b>%s:</b> %s" % (esc(r), esc(v)), linha) for r, v in c["competencias"]]
    ))

    hist.append(KeepTogether(
        [titulo(rot["idiomas"])]
        + [Paragraph("<b>%s:</b> %s" % (esc(r), esc(v)), linha) for r, v in c["idiomas"]]
    ))

    doc = SimpleDocTemplate(
        saida,
        pagesize=A4,
        leftMargin=MARGEM_X,
        rightMargin=MARGEM_X,
        topMargin=20 * mm,
        bottomMargin=18 * mm,
        title=c["titulo_pdf"],
        author=NOME,
        subject=c["assunto"],
    )
    doc.build(hist)


if __name__ == "__main__":
    args = sys.argv[1:]
    idioma = args.pop(0) if args and args[0] in CONTEUDO else "pt"
    raiz = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    destino = args[0] if args else os.path.join(raiz, CONTEUDO[idioma]["arquivo"])
    montar(destino, idioma)
    print("PDF gerado em", destino)
