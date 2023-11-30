import React from 'react'
import useAxios from '../hooks/useAxios'
import CoinTrending from './CoinTrending'


const Trending = () => {
    const { response, loading, error } = useAxios('search/trending');
    console.log(response);
    console.log(error);
    
    return (
        <div className='mt-8'>
            <h1 className='text-2xl mb-2'>Trending</h1>
            {response && response.map(coin => <CoinTrending key={coin.item.coin_id}
            coin = {coin.item} />)}
            <p>Is it loading? {loading}</p>
            <p>Did I get a response? {response}</p>
            <p>Are there any errors? {error}</p>
        </div>
    )
}

export default Trending