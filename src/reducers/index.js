import { combineReducers } from 'redux'
import { ACTIONS } from '../actions'

const currency = (state="USD", action) => {
    switch (action.type) {
        case ACTIONS.CHANGE_CURRENCY : 
            return state
        default : 
            return state
    }
}

const cryptos = (state=[], action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_PRICES:
            return state.map( (crypto) => {
                return (crypto.name === action.name) ? {...crypto, ...action} : { ...crypto }
            })
        default: 
            return state
    }
}

export default combineReducers({
    currency,
    cryptos,
})
