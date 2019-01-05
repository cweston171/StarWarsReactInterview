import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { apiUrl } from './api'
import './Card.css'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.character.name,
      birth_year: props.character.birth_year,
      isEditing: false
    }
  }

  toggleEdit = () => {
    this.setState(prevState => ({ isEditing: !prevState.isEditing }))
  }

  handleInputChange = (name, value) => {
    this.setState(prevState => (prevState[name] = value))
  }

  handleCancel = name => {
    const { character } = this.props
    this.setState(
      prevState => (prevState[name] = character[name]),
      () => {
        this.toggleEdit()
      }
    )
  }

  handleCharacterSave = () => {
    const { character, handleSave } = this.props
    const { name, birth_year } = this.state
    const request = character
    request.name = name
    request.birth_year = birth_year
    handleSave(character)
    this.toggleEdit()
  }

  render() {
    const { character, homeworld } = this.props
    const { name, birth_year, isEditing } = this.state

    const charName = isEditing ? (
      <input
        name={'name'}
        value={name}
        onChange={e => {
          this.handleInputChange('name', e.target.value)
        }}
      />
    ) : (
      character.name
    )

    const birthyear = isEditing ? (
      <input
        name="birth_year"
        value={birth_year}
        onChange={e => {
          this.handleInputChange('birth_year', e.target.value)
        }}
      />
    ) : (
      character.birth_year
    )

    return (
      <div className="card">
        <div className="card-content">
          <div className="card-name">{charName}</div>
          <img src={`${apiUrl}/${character.image}`} alt="profile" />
          <p>
            <span>Birthday:</span>
            <span>{birthyear}</span>
          </p>
          <p>
            {/* Note that in order to get the homeworld's name, you have to get the planet name from a different endpoint than the people */}
            <span>Homeworld:</span>
            <span>{homeworld}</span>
          </p>
          <button type="button" onClick={this.toggleEdit} hidden={isEditing}>
            Edit
          </button>
          <button
            type="button"
            onClick={this.handleCharacterSave}
            hidden={!isEditing}
          >
            Save
          </button>
          <button type="button" onClick={this.handleCancel} hidden={!isEditing}>
            Cancel
          </button>
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
  homeworld: PropTypes.string.isRequired,
  handleSave: PropTypes.func.isRequired
}

export default Card
