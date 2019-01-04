import { combineReducers } from 'redux'
import charactersReducer from '../characters/redux/reducer'

const rootReducer = combineReducers({
  charactersReducer
})

export default rootReducer
