import { all, fork, takeLatest } from 'redux-saga/effects';
import apiGenerator from '../utils/apiGenerator';

function* loginRequest() {
  yield takeLatest('LOGIN_REQUEST', apiGenerator);
}

function* registerRequest() {
  yield takeLatest('REGISTER_REQUEST', apiGenerator);
}

export default function* authSaga() {
  yield all([fork(loginRequest), fork(registerRequest)]);
}
