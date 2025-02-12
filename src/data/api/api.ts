import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.chucknorris.io',
  headers: { 'Content-Type': 'application/json' }
})

export const getApi = () => api
