import { getRoutes } from './routes'
import { QueryClient } from '@tanstack/react-query'

test('generates routes', async () => {
  const routes = getRoutes(new QueryClient())
  expect(routes).toMatchObject([
    {
      path: '/',
      children: [{ index: true }, { path: 'test' }]
    }
  ])
})
