import React from 'react'
import { Grid, Image, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import '../style.css'

import ReactjsIcon from '../images/reactjs.png'
import ReduxjsIcon from '../images/reduxjs.png'
import SemanticuiIcon from '../images/semanticui.png'
import KrakenLogo from '../images/kraken.png'


const PageFooter = () => (
    <Grid columns={2} stackable>
        <Grid.Column>
            <div className='footer-card'>
                <Header as='h3' textAlign='center'>Live Data Provided By</Header>
                <a href='https://kraken.com'><Image size='medium' src={KrakenLogo} centered /></a>
            </div>
        </Grid.Column>
        <Grid.Column>
            <Header as='h3' textAlign='center'>Built With</Header>
            <Grid columns={3} verticalAlign='middle' centered>
                <Grid.Column>
                    <Image size='tiny' src={ReactjsIcon} href="http://reactjs.org"></Image>
                </Grid.Column>
                <Grid.Column>
                    <Image size='tiny' src={ReduxjsIcon} href="http://redux.js.org"></Image>
                </Grid.Column>
                <Grid.Column>
                    <Image size='tiny' src={SemanticuiIcon} href="http://react.semantic-ui.com"></Image>
                </Grid.Column>
            </Grid>
        </Grid.Column>
    </Grid>
)

export default PageFooter
