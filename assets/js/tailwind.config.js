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
          sans: ['"Schibsted Grotesk"', 'system-ui', 'sans-serif'],
          mono: ['"Spline Sans Mono"', 'ui-monospace', 'monospace'],
        },
        colors: {
          paper: '#FAF9F6',
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
