import { connect } from 'react-redux'
import CurrencyBox from '../components/currency-box'
import { changeCurrency } from '../actions'


const mapPropsToDispatch = (dispatch) => ({
    onCurrencyChange : (currency) => dispatch(changeCurrency(currency))
})

export default connect(null, mapPropsToDispatch)(CurrencyBox)
