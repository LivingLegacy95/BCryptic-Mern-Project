import React from 'react';
import useAxios from '../hooks/useAxios';
import { useParams } from 'react-router-dom';

const HistoryChart = () => {
    const {id} = useParams();
    const {response} = useAxios(`coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=true&sparkline=false`)
    
    if(!response) {
        return <div>Loading... Please Wait</div>
    }

    return (
        <div >
        </div>
    )
}

export default HistoryChart