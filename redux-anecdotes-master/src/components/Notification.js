import React from 'react'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'

const Notification = (props) => {
 
  const style = {
    padding: 10,
    borderWidth: 1,
    color: "red"
  }
  const notification = props.notification
  return (
    <div style={style}>
        {notification}
  
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }  
}

const mapDispatchToProps = {
}

const ConnectedNotification = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification)
export default ConnectedNotification