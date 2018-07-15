import React from 'react'
import { Header, Message } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import '../style.css'

const PageHeader = () => (
        <Message color='olive' size='huge' className='page-header'>
            <Header as='h1'>Crypto Currencies</Header><br /><br />
            <Header as='h2'>Monitor Live Prices (USD)</Header>
        </Message>
)

export default PageHeader

