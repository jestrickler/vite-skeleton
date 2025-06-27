import { getQueryClient, getRoutes, getTheme } from './config'
import { QueryClientProvider } from '@tanstack/react-query'
import { ErrorBoundary } from '@/ui/components/error/ErrorBoundary'
import { ThemeProvider } from '@mui/material'
import { createBrowserRouter, RouterProvider } from 'react-router'

const queryClient = getQueryClient()
const routes = getRoutes(queryClient)
const theme = getTheme()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <RouterProvider router={createBrowserRouter(routes)} />
      </ThemeProvider>
    </ErrorBoundary>
  </QueryClientProvider>
)

export { App }
