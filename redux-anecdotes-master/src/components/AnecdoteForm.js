import React from 'react';
import { addNewAnecdote } from '../reducers/anecdoteReducer'
import { addNew} from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'
const AnecdoteForm = (props) => {
    const submitAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        console.log(content, "CONTENT")
        // props.store.dispatch(addNewAnecdote(content))
        // props.store.dispatch(addNew(content))
        // setTimeout(() => props.store.dispatch(hide()), 5000);
        // const newAnecdote= await anecdoteService.addNewAnecdote(content)
        // dispatch(addNewAnecdote(newAnecdote))
        props.addNewAnecdote(content)
        props.addNew(content, 5000)
        event.target.anecdote.value = ''
    }
    return (
        <div>
            <h2>add new</h2>
            <form onSubmit={submitAnecdote}>
                <div><input name="anecdote" /></div>
                <button>submit</button>
            </form>
        </div>
    )
}


  export default connect(
   null,
   {addNewAnecdote, addNew}
  )(AnecdoteForm)