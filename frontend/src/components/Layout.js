import { Header } from './Header.js';
import { Footer } from './Footer.js';

export function Layout(content) {
  return `
    <div class="d-flex flex-column min-vh-100">
      ${Header()}
      <main class="container flex-fill py-4">
        ${content}
      </main>
      ${Footer()}
    </div>
  `;
}
