// Bun 開發伺服器：HTML bundling + 靜態檔（videos/, images/）
import homePage from './產品組開箱簡報.html';

const STATIC_PREFIXES = ['/videos/', '/images/', '/music/'];

const server = Bun.serve({
  port: 3000,
  development: { hmr: true, console: true },
  routes: {
    '/': homePage,
  },
  async fetch(req) {
    const url = new URL(req.url);
    if (STATIC_PREFIXES.some((p) => url.pathname.startsWith(p))) {
      const file = Bun.file('.' + url.pathname);
      if (await file.exists()) return new Response(file);
    }
    return new Response('Not Found', { status: 404 });
  },
});

console.log(`→ ${server.url}`);
