import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import path from 'path';

export default defineConfig({
  site: 'https://softylus-2.vercel.app',
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '@lib': path.resolve('./src/lib')
      }
    }
  }
});