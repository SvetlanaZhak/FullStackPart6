import React from 'react';
import { voteFor } from '../reducers/anecdoteReducer'

import Anecdotes from './Anecdotes'

const AnecdoteList = ({ store }) => {
const { anecdotes, filter } = store.getState()

const anecdotesToShow = () => {
  if(filter !== undefined){
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
            
            }
            }
          />
        )}
      </ul>
    )
  }

export default AnecdoteList