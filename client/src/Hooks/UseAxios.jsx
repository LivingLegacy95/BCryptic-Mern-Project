import { useState, useEffect } from 'react';
import axios from 'axios';


const useAxios = (param) => {

    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const[error, setError] = useState('');
    
    axios.default.baseURL = 'https://api.coingecko.com/api/v3'
    
    
    const fetchData = async (param) => {
        try{
            setLoading(true);
            const result = await axios(param)
            setResponse(result.data)
            console.log("Hello World")
            

        }catch(err){
            setResponse("err")
            setError(err);
        } finally {
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchData(param);

    },[])
    return (
        response, loading, error
    )
}

export default useAxios