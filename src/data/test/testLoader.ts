import { getTestQuery } from '@/data/test/testApi'
import { QueryClient } from '@tanstack/react-query'

export const loader = async (queryClient: QueryClient) => ({
  result: queryClient.ensureQueryData(getTestQuery({ id: 1 }))
})
