import * as types from './actions'

const initialState = {
  characters: [],
  charactersError: false,
  homeworlds: [],
  homeworldsError: false,
  loadingCharacters: true,
  loadingHomeworlds: true,
  selectedCharacter: undefined,
  totalCharacters: 0
}

function charactersReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_CHARACTERS:
      return {
        ...state,
        characters: [],
        charactersError: false,
        loadingCharacters: true,
        totalCharacters: 0
      }

    case types.GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.data.data,
        loadingCharacters: false,
        totalCharacters: parseInt(action.data.count, 10)
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
