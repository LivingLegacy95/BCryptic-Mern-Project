import React from 'react'
import UseAxios from '../Hooks/UseAxios'

const CoinDetail = () => {
    const {response} = UseAxios(`coins/Bitcoin?localization=false&tickers=false&market_data=false&community_data=false&developer_data=true&sparkline=false`)
    console.log(response)
    
    return (
        <div>CoinDetail</div>
    )
}

export default CoinDetail