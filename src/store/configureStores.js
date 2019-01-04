import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import rootReducer from '../reducers'

const initialState = {}

const configureStore = () => {
  const sagaMiddleWare = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(sagaMiddleWare))
  )
  sagaMiddleWare.run(rootSaga)
  return store
}

const store = configureStore()
export default store
