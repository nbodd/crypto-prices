import React from 'react'
import ReactDOM from 'react-dom'

import 'semantic-ui-css/semantic.min.css';
import './style.css'

import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger } from 'redux-logger'
import { Provider } from 'react-redux'

import App from './containers/app'
import initialState from './krakenapi.json'

const loggerMiddleware = createLogger()    

const store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware, loggerMiddleware))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
