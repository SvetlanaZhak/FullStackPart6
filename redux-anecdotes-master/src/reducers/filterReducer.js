const filter = (text) => ({
    type: 'FILTER',
    data: text,
  })

const filterReducer = (state = '', action) => {
    switch (action.type) {
      case 'FILTER':
        return action.data
      default:
        return state
    }
  }

  export default filterReducer