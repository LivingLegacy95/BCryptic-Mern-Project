import { useState, useEffect } from 'react';
import axios from 'axios';


const useAxios = (param) => {

    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const[error, setError] = useState('');
    
    //base URL of axios API call to destructure useAxios method
    axios.defaults.baseURL = 'https://api.coingecko.com/api/v3'
    
    //Function do destructure Axios
    const fetchData = async (param) => {
        try{
            setLoading(true);
            //assigning variable telling application to wait for API call 
            const result = await axios(param)
            //Setting response from API into state
            setResponse(result.data)
            //responses from API
            console.log(result)
            console.log(response)
            

        }catch(err){
            setError(err);
        } finally {
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchData(param);

    },[])
    return{
        response, loading , error
    }   
}

export default useAxios