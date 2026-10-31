import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative base path ensures assets work both on GitHub Pages (/trailblazer-ministries/)
  // and when a custom domain is linked at the root (/) later.
  base: './',
  server: {
    port: 5000,
    strictPort: false,
    open: false,
  },
  preview: {
    port: 5000,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});
