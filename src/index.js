import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import firebase from './firebase';
import rootReducer from './reducers/index';
import CoverLetterControl from './components/CoverLetterControl';

const store = createStore(rootReducer);

const rrfProps = {
  firebase,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
      <CoverLetterControl />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
