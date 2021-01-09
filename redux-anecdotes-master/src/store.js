import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'
// import anecdoteService from '../services/anecdotes'
const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer,
  notification: notificationReducer
})

const store = createStore(reducer,  composeWithDevTools(
    applyMiddleware(thunk)
  )
  );



//   anecdoteService.getAll().then(anecdotes =>
//     anecdotes.forEach(anecdote => {
//       store.dispatch({ type: 'NEW_NOTE', data: anecdote })
//     })
//   )
  
export default store