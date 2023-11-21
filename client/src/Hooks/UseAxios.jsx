import { useState, useEffect } from 'react';
import axios from 'axios';


const UseAxios = (param) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const[error, setError] = useState('');
    
    axios.default.baseURL = 'https://api.coingecko.com/api/v3'
    
    
    const fetchData = async (param) => {
        try{
                setLoading(true);
            const result = await axios(param)
            setResponse(result.data)

        }catch(err){
            setError(err);
        } finally {
            setLoading(false);
        }
    }
    useEffect((param)=>{
        fetchData(param);

    },[])
    return (
        response, loading, error
    )
}

export default UseAxios