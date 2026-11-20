/**
 * Configuração do Tailwind (Play CDN) compartilhada por todas as páginas.
 * Precisa ser carregado logo depois de https://cdn.tailwindcss.com
 * (a checagem evita erro no console se o CDN não carregar).
 */
if (window.tailwind) {
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
          mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        },
        colors: {
          paper: '#F6F5F1',
          ink: '#121212',
          subtle: '#555555',
          muted: '#666666',
          borderSubtle: '#E4E4E7',
          bgSubtle: '#F4F4F5',
        }
      }
    }
  };
}
