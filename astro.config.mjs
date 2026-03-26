import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://signalroutes.work',

  server: {
    host: true
  },

  preview: {
    host: true
  },

  vite: {
    server: {
      allowedHosts: ['signalroutes.work', '.railway.app']
    }
  }
});