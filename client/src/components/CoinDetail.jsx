import React from 'react'
import useAxios from '../hooks/useAxios';

const CoinDetail = () => {
    const {response} = useAxios(`coins/Bitcoin?localization=false&tickers=false&market_data=false&community_data=false&developer_data=true&sparkline=false`);
    console.log(response)
    
    return (
        <div>CoinDetail</div>
    )
}

export default CoinDetail