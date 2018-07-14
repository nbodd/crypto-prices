import { connect } from 'react-redux'
import AppView from '../components/appview'

const mapStateToProps = (state) => ({
    cryptos : state.cryptos
})

export default connect(mapStateToProps, null)(AppView)
