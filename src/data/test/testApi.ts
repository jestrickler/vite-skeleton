import { getApi } from '../api/api'

export const getTestQuery = () => ({
  queryKey: ['test'],
  queryFn: async () => {
    return getApi()
      .get('/jokes/random')
      .then((response) => response.data)
  }
})
