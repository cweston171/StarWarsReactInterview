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
    actions.getHomeworlds()
  }

  handleFilterResults = value => {
    const { actions } = this.props
    actions.getCharacters({ query: value })
  }

  render() {
    const {
      characters,
      charactersError,
      loadingCharacters,
      homeworlds
    } = this.props

    const loading = <div style={{ textAlign: 'center' }}>Loading...</div>
    let content = loading
    if (!loadingCharacters && characters.length > 0) {
      content = (
        <div>
          {characters.map(c => {
            const homeworld =
              homeworlds && homeworlds.find(h => h.id === c.homeworld)
            const homeworldName = homeworld ? homeworld.name : 'Unknown'
            return <Card key={c.id} character={c} homeworld={homeworldName} />
          })}
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
        <SearchBar handleChange={this.handleFilterResults} />
        {content}
      </div>
    )
  }
}

CharacterContainer.propTypes = {
  characters: PropTypes.any.isRequired,
  charactersError: PropTypes.bool.isRequired,
  loadingCharacters: PropTypes.bool.isRequired,
  homeworlds: PropTypes.any.isRequired,
  homeworldsError: PropTypes.bool.isRequired,
  loadingHomeworlds: PropTypes.bool.isRequired,
  selectedCharacter: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    birth_year: PropTypes.string.isRequired,
    homeWorld: PropTypes.number
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
    homeworlds: charactersReducer.homeworlds,
    homeworldsError: charactersReducer.homeworldsError,
    loadingHomeworlds: charactersReducer.loadingHomeworlds,
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
