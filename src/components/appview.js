import React from 'react'
import PropTypes from 'prop-types'
import { Container, Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import '../style.css'

import CryptosList from './cryptos-list'
import CurrencySelector from '../containers/currency-selector'
import PageHeader from './header'
import PageFooter from './footer'


const AppView = ({cryptos}) => (
    <Container className='container'>
        <Grid columns={2} stackable divided>
            <Grid.Column width={10} textAlign='center' stretched><PageHeader /></Grid.Column>
            <Grid.Column width={6} textAlign='center' stretched><CurrencySelector /></Grid.Column>
        </Grid>
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
