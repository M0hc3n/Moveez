import { useState, useEffect} from "react";
const API_KEY = "a258ced"

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${API_KEY}`

const useFetch = (urlParams) =>{
    const [loading , setLoading] = useState(false)
    const [error, setError] = useState({show: false, msg: ''})
    const [data, setData] = useState([])

    const fetchData = async (url)=>{
        setLoading(true)

        try {
            const res = await fetch(url)
            const data = await res.json()

            if(data.Response){
                if(urlParams.slice(0,2) === '&i'){
                    setData(data)
                } else{
                    setData(data.Search)
                }
                
            } else{
                setData([])
            }

            

        } catch (error) {
            console.log(error);
            setError({show: true, msg:'Failed to load ressources'})
        }    
        
        setLoading(false)
    }

    useEffect(()=>{
        fetchData(`${API_ENDPOINT}${urlParams}`)
    },[urlParams])
    
    return {loading, data, error}

}


export default useFetch