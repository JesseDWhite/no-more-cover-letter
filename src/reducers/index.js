import { combineReducers } from 'redux';
import { firestoreReducer } from 'react-redux-firebase';
import formVisibleReducer from './form-visible-reducer';
import coverLetterList from './cover-letter-list';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterCoverLetterList: coverLetterList,
  firestore: firestoreReducer,
});

export default rootReducer;
