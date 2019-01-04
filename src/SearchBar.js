import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SearchBar.css'

class SearchBar extends Component {
  render() {
    const { handleChange } = this.props
    return (
      <div className="search-bar">
        <input
          placeholder="Search Your Destiny"
          onChange={e => {
            handleChange(e.target.value)
          }}
        />
      </div>
    )
  }
}

SearchBar.propTypes = {
  handleChange: PropTypes.any.isRequired
}

export default SearchBar
