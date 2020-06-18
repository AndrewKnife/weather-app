import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import './assets/styles/index.scss';
import * as serviceWorker from './services/serviceWorker';
import {createStore} from 'redux';
import {allReducers} from "./store";

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => console.log(store.getState()))

const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
)

serviceWorker.unregister();
