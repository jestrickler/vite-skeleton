import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ErrorBoundary } from './ErrorBoundary'

console.error = vi.fn()
const queryClient = new QueryClient()

test('renders children when no error occurs', () => {
  const TestComponent = () => <div>Test Content</div>

  render(
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <TestComponent />
      </ErrorBoundary>
    </QueryClientProvider>
  )

  expect(screen.getByText('Test Content')).toBeInTheDocument()
})

test('renders fallback UI when an error occurs', () => {
  const TestComponent = () => {
    throw new Error('An error occurred')
  }

  render(
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <TestComponent />
      </ErrorBoundary>
    </QueryClientProvider>
  )

  expect(screen.getByRole('alert')).toBeInTheDocument()
  expect(screen.getByText('Something went wrong')).toBeInTheDocument()
  expect(screen.getByText('An error occurred')).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Try again' })).toBeInTheDocument()
})
