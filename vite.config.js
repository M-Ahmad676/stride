import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import TailwindCss from 'tailwindcss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    TailwindCss()
  ],
})
