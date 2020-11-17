import React from 'react';
import { addNewAnecdote } from '../reducers/anecdoteReducer'


const AnecdoteForm = (props) => {
    const submitAnecdote = (event) => {
        event.preventDefault()
        const newAnec = event.target.anecdote.value
        props.store.dispatch(addNewAnecdote(newAnec))
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


export default AnecdoteForm