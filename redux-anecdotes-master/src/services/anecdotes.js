import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getId = () => (1000000 * Math.random()).toFixed(0)
const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const addNewAnecdote = async content => {
    const object = { content,
       id:getId(),
       votes: 0
     }
    const response = await axios.post(baseUrl, object)
    return response.data
  }

  const voteFor = async anecdote => {
    const url = baseUrl+"/"+anecdote.id;
    const object = { id: anecdote.id, content: anecdote.content, votes: anecdote.votes+1 }
    const response = await axios.put(url, object)
    return response.data
  }
export default { getAll, addNewAnecdote, voteFor}