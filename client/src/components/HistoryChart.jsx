import React from 'react';
import useAxios from '../hooks/useAxios';
import { useParams } from 'react-router-dom';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const HistoryChart = () => {
    const { id } = useParams();
    const { response } = useAxios(`coins/${id}/market_chart?vs_currency=usd&days=7`)
    console.log(response)

    if (!response) {
        return <div>Loading... Please Wait</div>
    }

    const coinChartData = response.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) }));
    console.log(coinChartData)
    
    const options = {
        responsive: true
    }

    const data = {
        labels:['1', '2'],
        datasets: [
            {
                fill: true,
                data:['10', '20',]
            }
        ]
    
    }

    return (
        <div>
            <Line options={options} data={data} />
        </div>
    )
}

export default HistoryChart