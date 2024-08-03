import axios from 'axios'

export default axios.create({
  baseURL: 'http://192.168.31.186:80/',
  timeout: 5000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
