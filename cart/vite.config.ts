import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './Cart': './src/Cart',
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
