import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { apiUrl } from './api'
import './Card.css'

class Card extends Component {
  render() {
    const { character, homeworld } = this.props
    return (
      <div className="card">
        <div className="card-content">
          <div className="card-name">{character.name}</div>
          <img src={`${apiUrl}/${character.image}`} alt="profile" />
          <p>
            <span>Birthday:</span>
            <span>{character['birth_year']}</span>
          </p>
          <p>
            {/* Note that in order to get the homeworld's name, you have to get the planet name from a different endpoint than the people */}
            <span>Homeworld:</span>
            <span>{homeworld}</span>
          </p>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    birth_year: PropTypes.string.isRequired,
    homeworld: PropTypes.number
  }).isRequired,
  homeworld: PropTypes.string.isRequired
}

export default Card
