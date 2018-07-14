
export const ACTIONS = {
    UPDATE_PRICE : "UPDATE_PRICE",
    CHANGE_CURRENCY : "CHANGE_CURRENCY",
}

export const updatePrice = (name, bid, ask, trade) => ({
    type : ACTIONS.UPDATE_PRICE,
    name,
    bid,
    ask,
    trade,
})

export const changeCurrency = (currency) => ({
    type : ACTIONS.CHANGE_CURRENCY,
    currency
})
