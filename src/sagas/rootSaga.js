import { all, fork } from 'redux-saga/effects';
import authSaga from './authSaga';
import resultsSaga from './resultsSaga';
import questionsSaga from './questionsSaga';

export default function* rootSaga() {
  yield all([fork(authSaga), fork(resultsSaga), fork(questionsSaga)]);
}
