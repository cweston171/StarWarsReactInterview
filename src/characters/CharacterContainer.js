import * as React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as characterActionCreators from './redux/actions'
import SearchBar from '../SearchBar'
import Card from '../Card'

class CharacterContainer extends React.Component {
  componentDidMount() {
    // retrieve dataj
    const { actions } = this.props
    actions.getCharacters()
  }

  componentDidUpdate(prevProps) {
    // handle update
  }

  render() {
    const { characters, charactersError, loadingCharacters } = this.props
    const loading = <div style={{ textAlign: 'center' }}>Loading...</div>
    let content = loading
    if (!loadingCharacters && characters.length > 0) {
      content = (
        <div>
          {characters.map(c => (
            <Card character={c} />
          ))}
        </div>
      )
    }
    if (charactersError) {
      content = (
        <div style={{ textAlign: 'center' }}>Failed to load characters...</div>
      )
    }
    return (
      <div>
        <SearchBar />
        {content}
      </div>
    )
  }
}

CharacterContainer.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({ user: PropTypes.objectOf(PropTypes.any) })
  ).isRequired,
  charactersError: PropTypes.bool.isRequired,
  loadingCharacters: PropTypes.bool.isRequired,
  selectedCharacter: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    homePlanet: PropTypes.string
  }),
  actions: PropTypes.any.isRequired
}

CharacterContainer.defaultProps = {
  selectedCharacter: undefined
}

const mstp = state => {
  const { charactersReducer } = state
  return {
    characters: charactersReducer.characters,
    charactersError: charactersReducer.charactersError,
    loadingCharacters: charactersReducer.loadingCharacters,
    selectedCharacter: charactersReducer.selectedCharacter
  }
}

const mdtp = dispatch => {
  return {
    actions: bindActionCreators(characterActionCreators, dispatch)
  }
}

export default connect(
  mstp,
  mdtp
)(CharacterContainer)
