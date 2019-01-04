import { call, put, takeLatest } from 'redux-saga/effects'
import CharacterService from './services'
import * as actions from './actions'

/**
 * GET CHARACTERS
 */
export function* getCharacters(action) {
  try {
    console.log('saga action.data:', action.data)
    const resp = yield call(CharacterService.getCharacters, action.data)
    const results = {
      data: resp.data,
      count: resp.headers['x-total-count']
    }
    yield put(actions.getCharactersSuccess(results))
  } catch (ex) {
    console.log(ex)
    yield put(actions.getCharactersFailure())
  }
}

/**
 * GET HOMEWORLDS
 */
export function* getHomeworlds(action) {
  try {
    const resp = yield call(CharacterService.getHomeworlds)
    yield put(actions.getHomeworldsSuccess(resp.data))
  } catch (ex) {
    console.log(ex)
    yield put(actions.getHomeworldsFailure())
  }
}

export function* charactersSaga() {
  yield takeLatest(actions.GET_CHARACTERS, getCharacters)
  yield takeLatest(actions.GET_HOMEWORLDS, getHomeworlds)
}
