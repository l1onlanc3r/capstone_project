import { combineReducers } from 'redux';
// import { LocaleReducer } from './localeReducer';
// import { ThemeReducer } from './themeReducer';
import user from './userReducer';
import results from './resultsReducer';
import questions from './questionsReducer';
import loading from './loadingReducer';
import errors from './errorReducer';

export default combineReducers({
  user,
  results,
  questions,
  loading,
  errors,
});
