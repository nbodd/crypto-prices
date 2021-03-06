import React from 'react'
import { Header, Message } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import '../style.css'

const PageHeader = () => (
        <Message>
            <Header as='h1'>Crypto Currencies</Header><br /><br />
            <Header as='h2'>Monitor Live Prices</Header>
        </Message>
)

export default PageHeader

