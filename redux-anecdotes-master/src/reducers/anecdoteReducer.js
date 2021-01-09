import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'VOTE':
      const id = action.data.id
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes+1
      }
      const mappedList = state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote
      )
    return mappedList.sort((a, b) => b.votes - a.votes)
    case "INIT_ANEC":
      return action.data.sort((a, b) => b.votes - a.votes)
    default:
      return state
  }
}

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

export default anecdoteReducer