import { type PropsWithChildren } from 'react'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'
import { Alert, AlertTitle, Button } from '@mui/material'

/**
 * handles errors during rendering, provides a fallback UI and integrates with
 * `@tanstack/react-query`'s `QueryErrorResetBoundary` to reset query state.
 */
export const ErrorBoundary = ({ children }: PropsWithChildren) => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ReactErrorBoundary
        onReset={reset}
        fallbackRender={({ error, resetErrorBoundary }) => (
          <Alert severity='error'>
            <AlertTitle>Something went wrong</AlertTitle>
            <pre>{error.message}</pre>
            <Button onClick={() => resetErrorBoundary()}>Try again</Button>
          </Alert>
        )}
      >
        {children}
      </ReactErrorBoundary>
    )}
  </QueryErrorResetBoundary>
)
