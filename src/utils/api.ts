import axios, { AxiosRequestConfig } from 'axios'

const API_URL = 'https://api.giphy.com/v1'

export const get = async (endpoint: string, options: AxiosRequestConfig) => {
  const response = await axios({
    url: API_URL + endpoint,
    method: 'GET',
    ...options
  })
  return response.data
}
