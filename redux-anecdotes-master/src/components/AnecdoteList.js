import React from 'react';
import { voteFor } from '../reducers/anecdoteReducer'
import {notification, hide} from '../reducers/notificationReducer'

import Anecdotes from './Anecdotes'

const AnecdoteList = ({ store }) => {
  console.log(store, "Store")
const { anecdotes, filter } = store.getState()
console.log(anecdotes, "ANEC")
console.log(filter, "Filter")
const anecdotesToShow = () => {
  if (filter){
    const filteredAnecdotes = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
    return filteredAnecdotes
  }
  else {
    return anecdotes
  }
}

    return (
      <ul>
        {anecdotesToShow().map(anecdote =>
          <Anecdotes
            key={anecdote.id}
            anecdote={anecdote}
            handleClick={() =>{
              store.dispatch(voteFor(anecdote.id))
              store.dispatch(notification(anecdote))
              setTimeout(() => store.dispatch(hide()), 5000);
            }
            }
          />
        )}
      </ul>
    )
  }

export default AnecdoteList