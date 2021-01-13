const initialNotification = ""

export const addNew = (anecdote, time) => {
    return async dispatch => {
        dispatch({
        type: 'NEW_NOTIFICATION',
        data: anecdote 

})
setTimeout(() => dispatch({ type: 'EMPTY' }), time*1000)};
}

export const hide = () => {
    return {
      type: 'HIDE',
    }
  }

  export const notification = (anecdote, time) => {
    return async dispatch => {
        dispatch ({
        type: 'VOTE_NOTIFICATION',
        data:  anecdote 
    })
    setTimeout(() => dispatch({ type: 'EMPTY' }), time*1000)};
  }


const notificationReducer = (state = initialNotification, action) => {
    switch (action.type) {
      case 'VOTE_NOTIFICATION':
          const anecdoteName = action.data
          const vote_notification = "You voted for '" + anecdoteName + "'"
        return vote_notification
      case 'HIDE':
        return null
  
      case "NEW_NOTIFICATION":
          const add_new = "New anecdote is created '" +  action.data + "'"
          return add_new
      default:
        return state
    }
  }
export default notificationReducer