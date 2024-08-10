import react from '@vitejs/plugin-react'


import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: '/AquiDEV/', // Set this to the name of your repository
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Optional: Split chunks manually if needed
      },
      chunkSizeWarningLimit: 1000, // Optional: Increase chunk size warning limit
    },
  },
});


// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


