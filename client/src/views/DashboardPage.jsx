import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import '../App.css'
import Trending from '../components/Trending'

const DashboardPage = () => {
    const [cryptoList, setCryptoList] = useState([])

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
            .then(response => {
                console.log(response.data)
                setCryptoList(response.data)
            })
            .catch(err => console.log("This is from dashboard page use state method", err))
    }, [])
    return (
        <div className="container" id="con">
            <div>
                <Trending />
            </div>
            <div className="data">
                {cryptoList.map((coin, idx) => {
                    return (
                        <div key={idx} className="card-container">
                            <div className="image-container">
                                <img src={coin.image} alt="Alt Coin Logo" />
                            </div>
                            <div className="card-content">
                                <div className="card-title">
                                    <h3>{coin.name}</h3>
                                </div>
                                <div className="card-body">
                                    <h6>#{coin.market_cap_rank}</h6>
                                    <p className="card-text">${coin.current_price}</p>
                                </div>
                            </div>
                            <div className="btn">
                                <button>
                                    <a href={`/coin/${coin.id}`}>{coin.name}</a>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default DashboardPage