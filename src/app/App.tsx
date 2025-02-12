import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { getQueryClient, getRoutes, getTheme } from './config'
import { ThemeProvider } from '@mui/material'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'

const queryClient = getQueryClient()
const routes = getRoutes(queryClient)
const theme = getTheme()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <RouterProvider router={createBrowserRouter(routes)} />
      </HelmetProvider>
    </ThemeProvider>
  </QueryClientProvider>
)

export { App }
