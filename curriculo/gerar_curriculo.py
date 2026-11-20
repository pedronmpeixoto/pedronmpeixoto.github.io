"""Gera o curriculo-pedro-peixoto.pdf (na raiz do site) a partir do conteúdo abaixo.

Uso:
    pip install "reportlab>=4.2"
    python curriculo/gerar_curriculo.py            # grava na raiz do repositório
    python curriculo/gerar_curriculo.py saida.pdf  # grava em outro caminho

Para atualizar o currículo, edite as listas da seção CONTEÚDO e rode de novo.
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
CARGO = "Desenvolvedor de IA & Automação"
CONTATO = ["(85) 99622-2252", "pedroiran1996@gmail.com", "Fortaleza, CE"]
LINKS = [
    ("pedronmpeixoto.github.io", "https://pedronmpeixoto.github.io"),
    ("linkedin.com/in/pedronpeixoto", "https://www.linkedin.com/in/pedronpeixoto"),
    ("github.com/pedronmpeixoto", "https://github.com/pedronmpeixoto"),
]

RESUMO = (
    "Desenvolvedor de IA e automação, formado em Direito. Atuei mais de quatro anos na "
    "controladoria jurídica do escritório onde trabalho antes de migrar para a TI. "
    "Construo automações no n8n integradas a APIs e bancos de dados, agentes de IA que "
    "geram documentos e aplicações web. Curso Análise e Desenvolvimento de Sistemas na UNIFOR."
)

# Da mais recente para a mais antiga (pela data de início).
EXPERIENCIAS = [
    {
        "empresa": "HCLB Advogados",
        "local": "Fortaleza, CE, Brasil",
        "cargo": "Desenvolvedor de IA & Automação",
        "periodo": "Mai 2026 - Atual",
        "itens": [
            "Fluxo no n8n que busca todo dia as publicações do Diário de Justiça Eletrônico "
            "Nacional (DJEN), atualiza a base do sistema do escritório no Supabase (PostgreSQL) "
            "e cruza as duas fontes. O tempo da conferência caiu 90%.",
            "Fluxo que coloca na frente da fila as publicações trabalhistas com prazo mais curto.",
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
]

PROJETOS = [
    "<b>Automação de Diários da Justiça e cruzamento com o ERP</b> (n8n, Supabase, PostgreSQL, "
    "APIs REST). Roda todo dia às 05:00, com retentativa e alertas. Case e demonstração em "
    '<a href="https://pedronmpeixoto.github.io/projetos/diarios-djen/">'
    "pedronmpeixoto.github.io/projetos/diarios-djen</a>.",
    "<b>Gerenciador de links dos TRTs com autenticação em dois fatores</b> (Next.js, JavaScript, "
    "Tailwind CSS). Acesso aos 24 TRTs e ao TST e gerador de códigos TOTP (RFC 6238) para "
    'certificado digital A1. Código em <a href="https://github.com/pedronmpeixoto/gerenciador">'
    "github.com/pedronmpeixoto/gerenciador</a>.",
    "<b>Emissão automática de GRUs trabalhistas</b> (Python, Pandas, SQL). Preenchia a guia a "
    "partir do número do processo. Feito para o portal antigo, hoje desativado.",
]

EDUCACAO = [
    "<b>Análise e Desenvolvimento de Sistemas -</b> Universidade de Fortaleza (2026 - cursando)",
    "<b>Bacharelado em Direito -</b> Universidade de Fortaleza (2014 - 2021)",
]

CERTIFICADOS = [
    "<b>Introduction to Model Context Protocol -</b> Anthropic (2026)",
    "<b>Programming with JavaScript -</b> Meta (2026)",
    "<b>Linguagem DAX, Modelagem de Dados, Power Query e Fundamentos de Análise de Dados -</b> "
    "Xperiun (2025)",
]

COMPETENCIAS = [
    ("Automação & Integrações", "n8n, APIs REST, Evolution API, Gmail API, Microsoft 365 / "
     "Outlook, Auth Basic / OAuth."),
    ("Desenvolvimento Web", "JavaScript, HTML/CSS, React, Next.js, Node.js (básico), "
     "Python (básico)."),
    ("IA", "Claude, Claude Code, Google AI Studio (Gemini), engenharia de prompt, "
     "Model Context Protocol (MCP)."),
    ("Dados & BI", "SQL, Supabase (PostgreSQL), Power BI, DAX, Power Query, ETL, Excel."),
    ("Ferramentas", "Git, GitHub, Windows e Linux Fedora."),
    ("Sistemas Jurídicos", "Legal One, Lysis, PJe, e-SAJ, e-Proc, Projudi."),
]

IDIOMAS = [("Português", "Nativo."), ("Inglês", "Intermediário.")]

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


def montar(saida):
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
    hist.append(Paragraph(esc(CARGO.upper()), cargo))
    hist.append(Paragraph(esc("  |  ".join(CONTATO)), contato))
    hist.append(Paragraph(
        "  |  ".join('<a href="%s">%s</a>' % (url, rotulo) for rotulo, url in LINKS), contato))
    hist.append(Spacer(1, 5))
    hist.append(HRFlowable(width="100%", thickness=0.9, color=CINZA, spaceAfter=2))

    hist.append(titulo("Resumo profissional"))
    hist.append(Paragraph(esc(RESUMO), base))

    hist.append(titulo("Experiências"))
    for i, exp in enumerate(EXPERIENCIAS):
        bloco = []
        if i:
            bloco.append(Spacer(1, 8))
        bloco.append(duas_colunas(exp["empresa"], exp["local"]))
        bloco.append(duas_colunas(exp["cargo"], exp["periodo"]))
        bloco.append(Spacer(1, 2))
        bloco.extend(itens(exp["itens"]))
        if exp.get("stack"):
            bloco.append(Paragraph(esc("Tech Stack: " + exp["stack"]), forte))
        hist.append(KeepTogether(bloco))

    hist.append(titulo("Projetos"))
    hist.extend(itens(PROJETOS))

    hist.append(titulo("Educação"))
    hist.extend(Paragraph(t, linha) for t in EDUCACAO)

    hist.append(titulo("Certificados"))
    hist.extend(Paragraph(t, linha) for t in CERTIFICADOS)

    hist.append(KeepTogether(
        [titulo("Competências")]
        + [Paragraph("<b>%s:</b> %s" % (esc(r), esc(v)), linha) for r, v in COMPETENCIAS]
    ))

    hist.append(KeepTogether(
        [titulo("Idiomas")]
        + [Paragraph("<b>%s:</b> %s" % (esc(r), esc(v)), linha) for r, v in IDIOMAS]
    ))

    doc = SimpleDocTemplate(
        saida,
        pagesize=A4,
        leftMargin=MARGEM_X,
        rightMargin=MARGEM_X,
        topMargin=20 * mm,
        bottomMargin=18 * mm,
        title="Currículo - Pedro Peixoto",
        author="Pedro Peixoto",
        subject="Desenvolvedor de IA e Automação",
    )
    doc.build(hist)


if __name__ == "__main__":
    raiz = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    destino = sys.argv[1] if len(sys.argv) > 1 else os.path.join(raiz, "curriculo-pedro-peixoto.pdf")
    montar(destino)
    print("PDF gerado em", destino)
