import { useSuspenseQuery } from '@tanstack/react-query'
import { getTestQuery } from '@/data/test/testApi'

export const TestView = () => {
  const { data } = useSuspenseQuery(getTestQuery())
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
