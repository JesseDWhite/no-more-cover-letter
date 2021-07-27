import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import formVisibleReducer from './form-visible-reducer';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  firestore: firestoreReducer,
  editing: formVisibleReducer,
});

export default rootReducer;
