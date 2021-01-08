import React from 'react';
import { addNewAnecdote } from '../reducers/anecdoteReducer'
import { addNew, hide } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
    const submitAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        console.log(content, "CONTENT")
        props.store.dispatch(addNewAnecdote(content))
        props.store.dispatch(addNew(content))
        setTimeout(() => props.store.dispatch(hide()), 5000);

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