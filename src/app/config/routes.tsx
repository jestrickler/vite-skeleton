import { createRoutesFromElements, Route } from 'react-router-dom'
import { QueryClient } from '@tanstack/react-query'
import type { RouteObject } from 'react-router/dist/lib/context'

let routes: RouteObject[] | null = null

export const getRoutes = (queryClient: QueryClient) => {
  if (!routes) {
    routes = createRoutesFromElements(
      <Route path='/' lazy={() => import('@/ui/pages/layout/Layout')}>
        <Route index lazy={() => import('@/ui/pages/home/Home')} />
        <Route
          path='test'
          loader={async () => {
            const { loader } = await import('@/data/test/testLoader')
            return loader(queryClient)
          }}
          lazy={() => import('@/ui/pages/test/Test')}
        />
      </Route>
    )
  }
  return routes
}
