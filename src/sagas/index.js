import { all } from 'redux-saga/effects'
import { charactersSaga } from '../characters/redux/saga'

export default function* rootSaga() {
  yield all([charactersSaga])
}
