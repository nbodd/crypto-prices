import React from 'react'
import ReactDOM from 'react-dom'

import 'semantic-ui-css/semantic.min.css';
import './style.css'

import KrakenTickerMap from './krakenapi.json'
import BitcoinImage from './images/bitcoin.png'
import LitecoinImage from './images/litecoin.png'
import EthereumImage from './images/ethereum.png'

import rootReducer from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './containers/app'
import initialState from './krakenapi.json'

const store = createStore(rootReducer, initialState)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
