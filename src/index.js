import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './assets/styles/index.scss';
import * as serviceWorker from './services/serviceWorker';
import {createStore} from 'redux';
import {allReducers} from "./store";
import locationActions from "./store/location/locationActions";
import TranslationsHelper from "./services/helpers/TranslationsHelper";
import App from "./App";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    store.dispatch(locationActions.getLocation(position.coords.latitude, position.coords.longitude))
  })
}

TranslationsHelper.init()

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>,
  rootElement
)

serviceWorker.unregister();
