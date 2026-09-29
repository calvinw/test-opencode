import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Required for GitHub Pages project sites: served from /<repo-name>/
  base: '/test-opencode/',
  plugins: [react(), tailwindcss()],
})
