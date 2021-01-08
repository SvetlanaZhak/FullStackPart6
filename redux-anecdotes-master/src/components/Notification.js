import React from 'react'
import { useSelector } from 'react-redux'

const Notification = ({store}) => {
 
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  const notification = store.getState().notification
  return (
    <div style={style}>
        {notification}
  
    </div>
  )
}

export default Notification