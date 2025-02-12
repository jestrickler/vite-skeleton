import { getQueryClient } from './queryClient'

const { mockQueryClient, mockQueryClientConstructor } = vi.hoisted(() => ({
  mockQueryClient: {},
  mockQueryClientConstructor: vi.fn(() => mockQueryClient)
}))
vi.mock('@tanstack/react-query', () => ({
  QueryClient: mockQueryClientConstructor
}))

test('generates a react-query QueryClient', async () => {
  const queryClient = getQueryClient()
  expect(mockQueryClientConstructor).toBeCalled()
  expect(queryClient).toBe(mockQueryClient)
})
