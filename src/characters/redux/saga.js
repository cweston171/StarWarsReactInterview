import { call, put, takeLatest } from 'redux-saga/effects'
import CharacterService from './services'
import * as actions from './actions'

/**
 * GET CHARACTERS
 */
export function* getCharacters(action) {
  try {
    const resp = yield call(CharacterService.getCharacters)
    yield put(actions.getCharactersSuccess(resp.data))
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
