/**
 * Diagrama interativo das páginas de case.
 *
 * Cada bloco clicável do SVG tem a classe .node-clickable e um atributo
 * data-node. O texto de cada bloco fica na própria página, em
 * <script type="application/json" id="diagram-node-info">, e é exibido
 * no painel #node-detail ao clicar (ou ao usar Enter/Espaço no teclado).
 */
(function () {
  var dataEl = document.getElementById('diagram-node-info');
  var detail = document.getElementById('node-detail');
  if (!dataEl || !detail) return;

  var nodeInfo;
  try {
    nodeInfo = JSON.parse(dataEl.textContent);
  } catch (e) {
    return;
  }

  var nodes = document.querySelectorAll('.node-clickable');

  function renderDetail(info) {
    var title = document.createElement('p');
    title.className = 'nd-title';
    title.textContent = info.title;

    var body = document.createElement('p');
    body.className = 'nd-body';
    body.textContent = info.body;

    detail.replaceChildren(title, body);
  }

  function activate(el) {
    nodes.forEach(function (n) { n.classList.remove('is-active'); });
    el.classList.add('is-active');
    var info = nodeInfo[el.getAttribute('data-node')];
    if (info) renderDetail(info);
  }

  nodes.forEach(function (el) {
    el.addEventListener('click', function () { activate(el); });
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activate(el);
      }
    });
  });
})();
