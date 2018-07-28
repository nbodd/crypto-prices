import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import '../style.css'

import CryptosList from './cryptos-list'
import CurrencySelector from './currency-box'
import PageHeader from './header'
import PageFooter from './footer'


const AppView = ({cryptos}) => (
    <Container className='container'>
        <PageHeader />
        <CurrencySelector />
        <CryptosList cryptos={cryptos} />
        <br />
        <hr />
        <br />
        <PageFooter />
    </Container>
)


AppView.propTypes = {
    cryptos : PropTypes.arrayOf(PropTypes.object).isRequired
}

export default AppView
