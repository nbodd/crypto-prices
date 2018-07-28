
export const ACTIONS = {
    UPDATE_PRICE : "UPDATE_PRICE",
    CHANGE_CURRENCY : "CHANGE_CURRENCY",
}

export const updatePrices = ({name, bid, ask, trade}) => ({
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

export function fetchCurrentPrices(url, parseJsonForLatestPrices) {
    return function(dispatch) {
        console.log("URL Fetch : %s", url)
        return fetch(url)
            .then(response => response.json(), error => console.log(error))
            .then(data => parseJsonForLatestPrices(data))
            .then(data => dispatch(updatePrices(data)))
    }
}
