import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import App from './components/App';
import firebase from './firebase';
import rootReducer from './reducers/index';
import * as serviceWorker from './serviceWorker';
import 'firebase/auth';

const store = createStore(rootReducer);

const rrfProps = {
  firebase,
  config: {
    userProfile: 'users',
    userFirestoreForProfile: true,
  },
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
