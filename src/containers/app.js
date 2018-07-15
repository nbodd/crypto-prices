import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import AppView from './appview'

import { updatePrices } from '../actions'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.baseUrl = 'https://api.kraken.com/0/public/Ticker?pair=';
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.fetchPricingData(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    fetchUrlData(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then( response => response.json())
                .then( data => resolve(data))
                .catch( error => reject(error))
        })
    }

    fetchPricingData() {
        let { cryptos, currency, updatePricesDisplay } = this.props;
        let promises = cryptos.map( (crypto, id) => {
            let url = this.baseUrl + crypto.ticker + currency;
            return this.fetchUrlData(url)
                .then( (data) => {
                    let res = data['result']['X' + crypto.ticker + 'Z' + currency]
                    res = { ...crypto, ask : res['a'][0], bid : res['b'][0], trade : res['c'][0] }
                    return res;
                })
        })
        Promise.all(promises)
            .then(cryptos => cryptos.forEach((crypto) => updatePricesDisplay(crypto)))
            .catch(e => console.log(e))
    }

    render() {
        return <AppView />
    }
}

App.propTypes = {
    cryptos : PropTypes.object.isRequired,
    currency : PropTypes.string.isRequired,
    updatePricesDisplay : PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    cryptos : state.cryptos,
    currency : state.currency
})

const mapPropsToDispatch = (dispatch) => ({
    updatePricesDisplay : (crypto) => dispatch(updatePrices(crypto))
})

export default connect(mapStateToProps, mapPropsToDispatch)(App)
