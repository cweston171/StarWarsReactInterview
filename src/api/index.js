import axios from 'axios'

export const apiUrl = 'http://localhost:3008'

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
    'X-From': 'StarWars Interview',
    Pragma: 'no-cache'
  }
})

export default api
