import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Image, Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import '../style.css'

const CryptoBlock = ({name, bid, ask, trade, image_data}) => (
    <div className='crypto-block'><Card fluid>
        <Card.Header>{name}</Card.Header>
        <Image floated='right' size='mini' src={image_data} />
        <Grid columns={3} stackable>
            <Grid.Column>Bid: {bid}</Grid.Column>
            <Grid.Column>Ask: {ask}</Grid.Column>
            <Grid.Column>Trade: {trade}</Grid.Column>
        </Grid>
    </Card></div>
)

CryptoBlock.propTypes = {
    name : PropTypes.string.isRequired,
    bid : PropTypes.number.isRequired,
    ask : PropTypes.number.isRequired,
    trade : PropTypes.number.isRequired,
    image_data : PropTypes.object,
}

export default CryptoBlock
