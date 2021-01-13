import React from 'react'
import { connect } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = (props) => {
  const handleFilter = (event) => {
    props.filterChange(event.target.value)

  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleFilter} />
    </div>
  )
}


  const mapDispatchToProps = {
    filterChange,
  }

  const mapStateToProps = (state) => {
    return {
      filter: state.filter,
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Filter)