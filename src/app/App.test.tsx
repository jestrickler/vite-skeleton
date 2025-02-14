import { render } from '@testing-library/react'
import { App } from './App'

const {
  mockGetQueryClient,
  mockGetRoutes,
  mockGetTheme,
  mockQueryClient,
  mockRoutes,
  mockTheme
} = vi.hoisted(() => ({
  mockGetQueryClient: vi.fn(() => mockQueryClient),
  mockGetRoutes: vi.fn(() => mockRoutes),
  mockGetTheme: vi.fn(() => mockTheme),
  mockQueryClient: {},
  mockRoutes: {},
  mockTheme: {}
}))
vi.mock('./config', () => ({
  getQueryClient: mockGetQueryClient,
  getRoutes: mockGetRoutes,
  getTheme: mockGetTheme
}))

const { mockQueryClientProvider } = vi.hoisted(() => ({
  mockQueryClientProvider: vi.fn((props) => props.children)
}))
vi.mock('@tanstack/react-query', () => ({
  QueryClientProvider: mockQueryClientProvider
}))

const { mockErrorBoundary } = vi.hoisted(() => ({
  mockErrorBoundary: vi.fn((props) => props.children)
}))
vi.mock('@/ui/components/error/ErrorBoundary', () => ({
  ErrorBoundary: mockErrorBoundary
}))

const { mockHelmetProvider } = vi.hoisted(() => ({
  mockHelmetProvider: vi.fn((props) => props.children)
}))
vi.mock('react-helmet-async', () => ({
  HelmetProvider: mockHelmetProvider
}))

const { mockThemeProvider } = vi.hoisted(() => ({
  mockThemeProvider: vi.fn((props) => props.children)
}))
vi.mock('@mui/material', () => ({
  ThemeProvider: mockThemeProvider
}))

const { mockCreateBrowserRouter, mockRouter, mockRouterProvider } = vi.hoisted(
  () => ({
    mockRouter: {},
    mockCreateBrowserRouter: vi.fn(() => mockRouter),
    mockRouterProvider: vi.fn()
  })
)
vi.mock('react-router-dom', () => ({
  createBrowserRouter: mockCreateBrowserRouter,
  RouterProvider: mockRouterProvider
}))

test('configures the QueryClientProvider', () => {
  render(<App />)
  expect(mockGetQueryClient).toBeCalled()
  expect(mockQueryClientProvider).toBeCalledWith(
    expect.objectContaining({
      client: mockQueryClient
    }),
    expect.anything()
  )
})

test('uses the ErrorBoundary', () => {
  render(<App />)
  expect(mockErrorBoundary).toBeCalled()
})

test('uses the HelmetProvider', () => {
  render(<App />)
  expect(mockHelmetProvider).toBeCalled()
})

test('configures the RouterProvider', () => {
  render(<App />)
  expect(mockGetRoutes).toBeCalled()
  expect(mockCreateBrowserRouter).toBeCalledWith(mockRoutes)
  expect(mockRouterProvider).toBeCalledWith(
    expect.objectContaining({
      router: mockRouter
    }),
    expect.anything()
  )
})

test('configures the ThemeProvider', () => {
  render(<App />)
  expect(mockGetTheme).toBeCalled()
  expect(mockThemeProvider).toBeCalledWith(
    expect.objectContaining({
      theme: mockTheme
    }),
    expect.anything()
  )
})
