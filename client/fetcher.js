import axios from "axios"

axios.defaults.baseURL = 'http://localhost:8000'
// axios.get('http://localhost:8000/messages)

const fetcher = async (method, url, ...rest) => {
  const res = await axios[method](url, ...rest)
  return res.data
}

/*
  get: axios.get(url[_,config]),
  delete: axios.delete(url[_,config]),
  post: axios.post(url, data[_,config]),
  put: axios.put(url, data[_,config]),
*/

export default fetcher