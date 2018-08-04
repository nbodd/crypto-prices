import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Image, Message, Header, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import '../style.css'

const priceSegment = (text, currency, price) => {
    let icon = <Icon name='dollar' />
    if (currency === "EUR")
        icon = <Icon name='euro' />

    return <Grid.Column><Header as="h4">{text} </Header>{icon} {(price) ? Number(price).toFixed(2) : <Icon name="spinner" />}</Grid.Column>
}

class CryptoBlock extends React.Component {
    constructor(props) {
        super(props);
        this.currency = this.props.currency
    }

    render() {
        let {name, bid, ask, trade, image_data} = this.props

        if (this.props.currency !== this.currency) {   
            // invalidate until next render
            bid = ask = trade = null
            this.currency = this.props.currency
        }

        return <Message className='crypto-block'>
            <Message.Content>
            <Message.Header as="h3">{name}</Message.Header>
            <br />
            <Image floated='left' size='mini' src={image_data} />
            <Grid columns={3} stackable>
                { priceSegment("Bid", this.currency, bid) }
                { priceSegment("Ask", this.currency, ask) }
                { priceSegment("Trade", this.currency, trade) }
            </Grid>
            </Message.Content>
        </Message>
    }
}

CryptoBlock.propTypes = {
    currency : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    bid : PropTypes.number.isRequired,
    ask : PropTypes.number.isRequired,
    trade : PropTypes.number.isRequired,
    image_data : PropTypes.string,
}

export default CryptoBlock
