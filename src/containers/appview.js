import { connect } from 'react-redux'
import AppView from '../components/appview'

import BitcoinImage from '../images/bitcoin.png'
import LitecoinImage from '../images/litecoin.png'
import EthereumImage from '../images/ethereum.png'

const getImageData = name => {
    if (name === "BITCOIN")
        return BitcoinImage
    else if (name === "LITECOIN")
        return LitecoinImage
    else if (name === "ETHEREUM")
        return EthereumImage
    
    return ""
}

const appendImageDataAndCurrency = (state) => (
    state.cryptos.map((crypto) => ({...crypto, currency : state.currency, image_data : getImageData(crypto.name)}))
)

const mapStateToProps = (state) => ({
    cryptos : appendImageDataAndCurrency(state)
})

export default connect(mapStateToProps)(AppView)
