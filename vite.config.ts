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
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTest.ts',
    css: true,
    coverage: {
      exclude: [
        ...(configDefaults.coverage.exclude ?? []),
        './src/main.tsx',
        '**/index.ts',
        '**/*.stories.tsx'
      ]
    }
  }
})
