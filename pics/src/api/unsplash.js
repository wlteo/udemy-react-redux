import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID mwo4GZG76ZZtibhskC5oKu6IarHKA--kTD4nMmw3OvA'
  }
})