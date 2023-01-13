import axios from 'axios'

const url = process.env.REACT_APP_URL_API
const apiUrl = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default apiUrl
