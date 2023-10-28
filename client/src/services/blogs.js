import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = async () => {
  const request = await axios.get(baseUrl)
  return request.data
}
const create = async (data, auth) => {
  const request = await axios.post(baseUrl, data, auth)
  return request.data
}
const like = async (data) => {
  const request = await axios.put(`${baseUrl}/${data.id}`, data)
  return request.data
}
const remove = async (id, auth) => {
  return await axios.delete(`${baseUrl}/${id}`, auth)
}

export default { getAll, create, like, remove }
