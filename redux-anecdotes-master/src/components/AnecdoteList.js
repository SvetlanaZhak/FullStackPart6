import React from 'react';
import { voteFor } from '../reducers/anecdoteReducer'
import {notification} from '../reducers/notificationReducer'
import { connect } from "react-redux";
import Anecdotes from './Anecdotes'

const AnecdoteList = props => {
console.log(props, "PROPS")
    return (
      <ul>
        {props.showedAnec.anecdotes.map(anecdote =>
          <Anecdotes
            key={anecdote.id}
            anecdote={anecdote}
            handleClick={() =>{
              props.voteFor(anecdote);
              props.notification(anecdote.content, 5);
            }
            }
          />
        )}
      </ul>
    )
  }



const filteredAnecdotes = (anecdotes, filter) => {
  if (filter){
    const filteredAnecdotes = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
    return filteredAnecdotes
  }
  else {
    return anecdotes
  }
}

const mapStateToProps = state => {
  return {
    showedAnec: filteredAnecdotes(state)
  };
};

  const mapDispatchToProps = {
    voteFor,
    notification,
    
  };
  
 
  const allAnecdotes = connect(
    mapStateToProps,
    mapDispatchToProps
  )(AnecdoteList);
export default allAnecdotes