import { getTheme } from './theme'

const { mockCreateTheme } = vi.hoisted(() => ({
  mockCreateTheme: vi.fn(() => 'mockTheme')
}))
vi.mock('@mui/material', () => ({
  createTheme: mockCreateTheme
}))

test('initializes material theme', async () => {
  const theme = getTheme()
  expect(mockCreateTheme).toBeCalled()
  expect(theme).toBe('mockTheme')
})
