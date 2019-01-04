import axios from 'axios'

const api = axios.create({
  baseURL: 'https://localhost:3080',
  headers: {
    'Content-Type': 'application/json',
    'X-From': 'StarWars Interview',
    Pragma: 'no-cache'
  }
})

export default api
