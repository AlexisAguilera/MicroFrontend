import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './Products': './src/Products',
      },
      // The shared configuration ensures that at runtime, only one instance of MUI is loaded.
      // However, during development, each micro frontend will still use its local installation of MUI.
      shared: ['react', 'react-dom', '@mui/material'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
