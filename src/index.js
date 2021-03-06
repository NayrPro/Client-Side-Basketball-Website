import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from 'redux'
import windowSizeReducer from './Store/windowSizeReducer'
import videoReducer from './Store/videoReducer'
import coursesEltReducer from './Store/coursesEltReducer'
import commentsReducer from './Store/commentsReducer'
import videoOptionsReducer from './Store/videoOptionsReducer'
import {Provider} from 'react-redux'
import {HashRouter as Router} from "react-router-dom"

const rootReducer = combineReducers({
  windowSizeReducer, videoReducer, coursesEltReducer, commentsReducer, videoOptionsReducer
})

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
