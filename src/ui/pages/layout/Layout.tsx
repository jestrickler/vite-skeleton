import { Box, Button, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { ErrorBoundary } from '@/ui/components/error/ErrorBoundary'
import { Link } from '@/ui/components/link/Link'

/**
 * This is the ROOT Layout for the application. It includes the skipLink and
 * semantic html elements
 */
export const Component = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%'
      }}
    >
      <Button
        href='#main'
        sx={{
          position: 'absolute',
          left: -9999,
          'z-index': 999,
          '&:focus': {
            left: '50%',
            transform: 'translateX(-50%)'
          }
        }}
      >
        Skip to main content
      </Button>
      <header>
        <nav>
          <Stack spacing={2} direction='row'>
            <Link to='/'>Home</Link>
            <Link to='/test'>Test</Link>
          </Stack>
        </nav>
      </header>
      <main id='main'>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <footer></footer>
    </Box>
  )
}

Component.displayName = 'Layout'
