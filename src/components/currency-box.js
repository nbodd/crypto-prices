import React from 'react'
import PropTypes from 'prop-types'
import { Message, Header, Dropdown, Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import '../style.css'

let currencyOptions = [ {
                            value : "USD",
                            icon : 'dollar'
                        }, {
                            value : "EUR",
                            icon : 'euro'
                        }
                      ].map( 
                          option => { option.text = option.value; return option; }
                       )

const CurrencySelector = ({onCurrencyChange}) => (
    <Message centered fluid><Message.Content textAlign='center'>
        <Grid textAlign='center'>
            <Grid.Row>
                <Header as="h2">Currency</Header>
            </Grid.Row>
            <Grid.Row>
                <Dropdown defaultValue='USD' selection labeled floating options={currencyOptions}
                            onChange={ (event, data) => onCurrencyChange(data.value) }>
                </Dropdown>
            </Grid.Row>
        </Grid>
    </Message.Content></Message>
)

CurrencySelector.propTypes = {
    onCurrencyChange : PropTypes.func.isRequired
}

export default CurrencySelector
