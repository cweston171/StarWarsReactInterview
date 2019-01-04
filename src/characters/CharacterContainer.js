import * as React from 'react'
import PropTypes from 'prop-types'
import { connect, Dispatch } from 'react-redux'

class CharacterContainer extends React.Component {
  componentDidMount() {
    // retrieve data
  }

  componentDidUpdate(prevProps) {
    // handle update
  }

  render() {
    return (
      <div>
        <SearchBar />
        {
          // cards
        }
      </div>
    )
  }
}

CharacterContainer.propTypes = PropTypes.shapeOf({
  characters: PropTypes.arrayOf(
    PropTypes.shapeOf({ user: PropTypes.objectOf(PropTypes.any) })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  selectedCharacter: PropTypes.shapeOf({
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    homePlanet: PropTypes.string
  })
})

CharacterContainer.defaultProps = {
  selectedCharacter: undefined
}

export default CharacterContainer
