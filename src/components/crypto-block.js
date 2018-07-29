import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Image, Message } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import '../style.css'

const CryptoBlock = ({currency, name, bid, ask, trade, image_data}) => (
    <Message className='crypto-block'>
        <Message.Content>
        <Message.Header>{name}</Message.Header>
        <Image floated='right' size='mini' src={image_data} />
        <Grid columns={3} stackable>
            <Grid.Column>Bid: {currency} {(bid) ? bid : "---"}</Grid.Column>
            <Grid.Column>Ask: {currency} {(ask) ? ask : "---"}</Grid.Column>
            <Grid.Column>Trade: {currency} {(trade) ? trade : "---"}</Grid.Column>
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
