import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

const root = import.meta.dirname;

export default defineConfig({
  base: './',
  plugins: [tailwindcss()],
  build: {
    rolldownOptions: {
      input: {
        home: resolve(root, 'index.html'),
        sass: resolve(root, 'sass/index.html'),
        tailwind: resolve(root, 'tailwind/index.html'),
      },
    },
  },
});
