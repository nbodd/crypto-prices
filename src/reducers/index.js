import { combineReducers } from 'redux'
import { ACTIONS } from '../actions'

const currency = (state="USD", action) => {
    switch (action.type) {
        case ACTIONS.CHANGE_CURRENCY : 
            return action.currency
        default : 
            return state
    }
}

const cryptos = (state=[], action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_PRICE:
            return state.map( (crypto) => ((crypto.name === action.name) ? {...crypto, ...action} : { ...crypto }))
        default: 
            return state
    }
}

export default combineReducers({
    currency,
    cryptos,
})
