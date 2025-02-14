import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { getQueryClient, getRoutes, getTheme } from './config'
import { QueryClientProvider } from '@tanstack/react-query'
import { ErrorBoundary } from '@/ui/components/error/ErrorBoundary'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from '@mui/material'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const queryClient = getQueryClient()
const routes = getRoutes(queryClient)
const theme = getTheme()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <RouterProvider router={createBrowserRouter(routes)} />
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  </QueryClientProvider>
)

export { App }
