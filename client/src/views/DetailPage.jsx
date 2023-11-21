import React from 'react'
import HistoryChart from '../components/HistoryChart'
import CoinDetail from '../components/CoinDetail'

const DetailPage = () => {
    return (
        <div className="wrapper-container mt-10">
            <HistoryChart/>
            <CoinDetail/>
        </div>
    )
}

export default DetailPage