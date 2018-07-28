import React from 'react'
import PropTypes from 'prop-types'
import { Card, Header, Dropdown, Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import '../style.css'

let currencyOptions = [ {
                            value : "USD"
                        }, {
                            value : "EUR" 
                        }
                      ].map( 
                          option => { option.text = option.value; return option; }
                       )

const CurrencySelector = ({onCurrencyChange}) => (
    <Card centered fluid><Card.Content textAlign='center'>
        <Grid columns={2}>
            <Grid.Column>
            <Header as="h2">Currency : </Header>
            </Grid.Column>
            <Grid.Column>
                <Dropdown defaultValue="USD" button floating labeled selection options={currencyOptions} 
                                onChange={ (event, data) => onCurrencyChange(data.value) }/>
            </Grid.Column>
        </Grid>
    </Card.Content></Card>
)

CurrencySelector.propTypes = {
    onCurrencyChange : PropTypes.func.isRequired
}

export default CurrencySelector
