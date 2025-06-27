import { useSuspenseQuery } from '@tanstack/react-query'
import { getTestQuery } from '@/data/test/testApi'

type TestViewProps = {
  id: number
}

export const TestView = ({ id }: TestViewProps) => {
  const { data } = useSuspenseQuery(getTestQuery({ id }))
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
