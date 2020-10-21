import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/store';

import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";


document.addEventListener("DOMContentLoaded", () => {
  const preloadedState = {}
  let store = configureStore(preloadedState)

  const root = document.getElementById("root");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  );
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
