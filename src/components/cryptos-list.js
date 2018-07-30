import React from 'react'
import PropTypes from 'prop-types'

import { Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import CryptoBlock from './crypto-block'

const CryptosList = ({cryptos}) => (
    
    <Grid stretched centered>
        {cryptos.map((crypto, id) => <Grid.Row key={id} stretched textAlign='left'><CryptoBlock {...crypto} /></Grid.Row>)}
    </Grid>

)

CryptosList.propTypes = {
    cryptos : PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CryptosList
