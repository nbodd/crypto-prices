import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import AppView from './appview'

import { fetchCurrentPrices } from '../actions'

 const cryptoPricesFromFetchData = (crypto, data, currency) => {
    let res = data['result']['X' + crypto.ticker + 'Z' + currency]
    return { ...crypto, ask : res['a'][0], bid : res['b'][0], trade : res['c'][0] }
 }

class App extends React.Component {
    constructor(props) {
        super(props);
        this.baseUrl = 'https://api.kraken.com/0/public/Ticker?pair=';
    }

    componentDidMount() {
        // fetch ASAP
        this.fetchPricingData();
        
        // set interval after
        this.timerId = setInterval(() => this.fetchPricingData(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    fetchPricingData() {
        let { cryptos, currency, getCurrentPrices} = this.props
        cryptos.forEach((crypto, id) => {
            let url = this.baseUrl + crypto.ticker + currency;
            getCurrentPrices(url, (data) => cryptoPricesFromFetchData(crypto, data, currency))
        })
    }

    render() {
        return <AppView />
    }
}

App.propTypes = {
    cryptos : PropTypes.array.isRequired,
    currency : PropTypes.string.isRequired,
    getCurrentPrices : PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    cryptos : state.cryptos,
    currency : state.currency
})

const mapPropsToDispatch = (dispatch) => ({
    getCurrentPrices : (url, jsonDataParser) => dispatch(fetchCurrentPrices(url, jsonDataParser))
})

export default connect(mapStateToProps, mapPropsToDispatch)(App)
