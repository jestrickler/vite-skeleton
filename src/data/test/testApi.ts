import { getApi } from '../api/api'

export type TestQueryProps = {
  id: number
}

export const getTestQuery = ({ id }: TestQueryProps) => ({
  queryKey: ['todos', id],
  queryFn: async () => {
    return getApi()
      .get(`/todos/${id}`)
      .then((response) => response.data)
  }
})
