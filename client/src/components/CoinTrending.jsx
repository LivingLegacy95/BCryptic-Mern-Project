import React from 'react'

const CoinTrending = ({coin}) => {
    console.log(coin);
    return (
        <>
        <div className="font-light mb-2 p-2 border-gray-200 border-2 rounded hover:bg-gray-200">
            <div className="flex items-center gap-1">
                <span>{coin.score +1}.</span>
                <img src={coin.small} alt="" />

            </div>
        </div>
        </>
    )
}

export default CoinTrending