import { Layout } from './components/Layout.js';

const app = document.getElementById('app');
app.innerHTML = Layout('<p>Conteúdo principal</p>');

document.getElementById('theme-toggle').addEventListener('click', () => {
  const html = document.documentElement;
  html.dataset.bsTheme = html.dataset.bsTheme === 'light' ? 'dark' : 'light';
});
