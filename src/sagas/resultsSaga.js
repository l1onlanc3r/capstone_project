import { all, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import apiGenerator from '../utils/apiGenerator';

function* loadResultsRequest() {
  yield takeEvery('LOAD_RESULTS_REQUEST', apiGenerator);
}

function* checkAnswersRequest() {
  yield takeLatest('CHECK_ANSWERS_REQUEST', apiGenerator);
}

export default function* rootResultsSaga() {
  yield all([fork(loadResultsRequest), fork(checkAnswersRequest)]);
}
