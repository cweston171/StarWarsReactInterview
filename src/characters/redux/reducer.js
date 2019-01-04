import * as types from './actions'

const initialState = {
  characters: [],
  charactersError: false,
  homeWorlds: [],
  homeworldsError: false,
  loadingCharacters: true,
  loadingHomeworlds: true,
  selectedCharacter: undefined
}

function charactersReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_CHARACTERS:
      return {
        ...state,
        characters: [],
        charactersError: false,
        loadingCharacters: true
      }

    case types.GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.data,
        loadingCharacters: false
      }

    case types.GET_CHARACTERS_FAILURE:
      return {
        ...state,
        characters: [],
        charactersError: true,
        loadingCharacters: false
      }

    case types.GET_HOMEWORLDS:
      return {
        ...state,
        homeworlds: [],
        homeworldsError: false,
        loadingHomeworlds: true
      }

    case types.GET_HOMEWORLDS_SUCCESS:
      console.log('action.data:', action.data)
      return {
        ...state,
        homeworlds: action.data,
        loadingHomeworlds: false
      }

    case types.GET_HOMEWORLDS_FAILURE:
      return {
        ...state,
        homeworldsError: true,
        loadingHomeworlds: false
      }

    default:
      return state
  }
}

export default charactersReducer
