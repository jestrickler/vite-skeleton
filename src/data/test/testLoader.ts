import { getTestQuery } from '@/data/test/testApi'
import { QueryClient } from '@tanstack/react-query'
import { defer } from 'react-router-dom'

export const loader = async (queryClient: QueryClient) =>
  defer({ result: queryClient.ensureQueryData(getTestQuery()) })
