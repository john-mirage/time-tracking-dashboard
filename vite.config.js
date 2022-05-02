import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/time-tracking-dashboard/",
  resolve: {
    alias: {
      '@images': resolve(__dirname, 'src/images'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@data': resolve(__dirname, 'src/data'),
    },
  },
})