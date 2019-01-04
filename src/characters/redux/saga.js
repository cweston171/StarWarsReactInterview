import { call, put, takeLatest } from 'redux-saga/effects'
import CharacterService from './services'
import * as actions from './actions'

/**
 * GET CHARACTERS
 */
export function* getCharacters(action) {
  console.log('test')
  try {
    const resp = yield call(CharacterService.getCharacters)
    console.log(resp)
    yield put(actions.getCharactersSuccess(resp.data))
  } catch (ex) {
    console.log(ex)
    yield put(actions.getCharactersFailure())
  }
}

export function* charactersSaga() {
  yield takeLatest(actions.GET_CHARACTERS, getCharacters)
}
