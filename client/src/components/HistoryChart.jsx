import React from 'react'
import useAxios from '../hooks/useAxios'

const HistoryChart = () => {
    const {response} = useAxios(`coins/Bitcoin?localization=false&tickers=false&market_data=false&community_data=false&developer_data=true&sparkline=false`)
    console.log(response)
    return (
        <div>HistoryChart</div>
    )
}

export default HistoryChart