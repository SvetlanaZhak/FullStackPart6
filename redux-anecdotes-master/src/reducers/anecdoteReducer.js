import anecdoteService from '../services/anecdotes'

export const addNewAnecdote = (content) => { 
  return async dispatch => {
    const submitAnec = await anecdoteService.addNewAnecdote(content)
    dispatch({
    type: "NEW_ANECDOTE",
    data: submitAnec,

    }
    )
  }
}

export const voteFor = (anecdote) => {

  return async dispatch =>  {
    const anecdoteUpdate = await anecdoteService.voteFor(anecdote)
    dispatch({
      type: 'VOTE',
      data: anecdoteUpdate
    })
  }
}
export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
    type: 'INIT_ANEC',
    data: anecdotes,
  })
}
}
const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'VOTE':
      const id = action.data.id
      const updatedAnecdote = state.find(a => a.id === id)
      const votedAnecdote = {
        ...updatedAnecdote,
        votes: updatedAnecdote.votes+1
      }
      const orderedVotes = state.map(anecdote =>
        anecdote.id !== id ? anecdote : votedAnecdote
      )
    return orderedVotes.sort((a, b) => b.votes - a.votes)
    case "INIT_ANEC":
      return action.data.sort((a, b) => b.votes - a.votes)
    default:
      return state
  }
}
export default anecdoteReducer