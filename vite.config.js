import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import markdownHandler from './api/handler.js';

function markdownNegotiationPlugin() {
  return {
    name: 'markdown-content-negotiation',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        res.setHeader('Vary', 'Accept');
        const accept = req.headers['accept'] || '';
        if (accept.includes('text/markdown') || accept.includes('text/x-markdown')) {
          res.status = (code) => {
            res.statusCode = code;
            return res;
          };
          res.send = (body) => {
            res.end(body);
          };
          markdownHandler(req, res);
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [react(), markdownNegotiationPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: false,
  },
});
