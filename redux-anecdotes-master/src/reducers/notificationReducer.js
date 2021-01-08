const initialNotification = ""


const notificationReducer = (state = initialNotification, action) => {
  switch (action.type) {
    case 'VOTE_NOTIFICATION':
        const anecdoteName = action.data.content
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

export const addNew = (anecdote) => {
    return {
        type: 'NEW_NOTIFICATION',
        data: anecdote 
}
}
export const hide = () => {
    return {
      type: 'HIDE',
    }
  }

  export const notification = (anecdote) => {
    return {
      type: 'VOTE_NOTIFICATION',
      data:  anecdote 
    }
  }
export default notificationReducer