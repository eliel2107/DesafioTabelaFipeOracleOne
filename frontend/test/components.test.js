import assert from 'assert';
import { Header } from '../src/components/Header.js';
import { Footer } from '../src/components/Footer.js';
import { Layout } from '../src/components/Layout.js';

assert.ok(Header().includes('navbar'), 'Header should contain navbar');
assert.ok(Footer().includes('<footer'), 'Footer should render footer tag');
const layout = Layout('<div>body</div>');
assert.ok(layout.includes('navbar'), 'Layout should include Header');
assert.ok(layout.includes('<footer'), 'Layout should include Footer');

console.log('All component tests passed');
