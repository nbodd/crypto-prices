import React from 'react'
import PropTypes from 'prop-types'

import { Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import CryptoBlock from './crypto-block'

const CryptosList = ({cryptos}) => (
    <div>
        <Grid stretched>
           {cryptos.map((crypto, id) => <Grid.Row stretched><CryptoBlock {...crypto} /></Grid.Row>)}
        </Grid>
    </div>
)

CryptosList.propTypes = {
    cryptos : PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CryptosList
