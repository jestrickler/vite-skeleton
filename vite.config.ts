import { configDefaults, defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  test: {
    coverage: {
      exclude: [
        ...(configDefaults.coverage.exclude ?? []),
        './src/main.tsx',
        '**/index.ts',
        '**/*.stories.tsx'
      ]
    },
    css: true,
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTest.ts'
  }
})
