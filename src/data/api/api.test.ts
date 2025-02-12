import { getApi } from './api'

const { mockCreate } = vi.hoisted(() => ({
  mockCreate: vi.fn(() => 'mockApi')
}))
vi.mock('axios', () => ({
  default: { create: mockCreate }
}))

test('initializes axios', async () => {
  const api = getApi()
  expect(mockCreate).toBeCalledWith({
    baseURL: 'https://api.chucknorris.io',
    headers: { 'Content-Type': 'application/json' }
  })
  expect(api).toBe('mockApi')
})
