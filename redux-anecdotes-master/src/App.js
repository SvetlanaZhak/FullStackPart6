import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = (props) => {
  useEffect(() => {
    props.initializeAnecdotes();
  }, [])

  return (
    <>
   
      <h2>Anecdotes</h2>
      <Filter store={props.store} />
      <Notification store={props.store} />
      <AnecdoteForm store={props.store}/>
      <AnecdoteList store={props.store}  />
 
 
      <br/>
    </>
  )
}

export default connect(null, { initializeAnecdotes })(App)