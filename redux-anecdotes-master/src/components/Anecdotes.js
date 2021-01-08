import React from 'react'

const Anecdotes = ({ anecdote, handleClick }) => {
  return (
    <li >
      <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <br/>
            <button onClick={handleClick}>vote</button>
          </div>
        </div>
    </li>
  )
}

export default Anecdotes