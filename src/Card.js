import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Card.css'

class Card extends Component {
  render() {
    const { name, imgUrl, birthday, homePlanet } = this.props
    return (
      <div className="card">
        <div className="card-content">
          <div className="card-name">{name}</div>
          <img src={imgUrl} alt="profile" />
          <p>
            <span>Birthday:</span>
            <span>{birthday}</span>
          </p>
          <p>
            {/* Note that in order to get the homeworld's name, you have to get the planet name from a different endpoint than the people */}
            <span>Homeworld:</span>
            <span>{homePlanet}</span>
          </p>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  homePlanet: PropTypes.string
}

Card.defaultProps = {
  homePlanet: undefined
}

export default Card
