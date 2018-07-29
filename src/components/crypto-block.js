import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Image, Message, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import '../style.css'

const priceSegment = (text, currency, price) => (
    <Grid.Column><Header as="h4">{text} </Header>{currency} {(price) ? price : "---"}</Grid.Column>
)

const CryptoBlock = ({currency, name, bid, ask, trade, image_data}) => (
    <Message className='crypto-block'>
        <Message.Content>
        <Message.Header as="h3">{name}</Message.Header>
        <br />
        <Image floated='right' size='mini' src={image_data} />
        <Grid columns={3} stackable>
            { priceSegment("Bid", currency, bid) }
            { priceSegment("Ask", currency, ask) }
            { priceSegment("Trade", currency, trade) }
        </Grid>
        </Message.Content>
    </Message>
)

CryptoBlock.propTypes = {
    currency : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    bid : PropTypes.number.isRequired,
    ask : PropTypes.number.isRequired,
    trade : PropTypes.number.isRequired,
    image_data : PropTypes.string,
}

export default CryptoBlock
