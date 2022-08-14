import React,{useContext , useState, useEffect} from "react";
import useFetch from './useFetch'

const AppContext = React.createContext()

const randomMovie = ['joker', 'batman', 'fast furious', 'hello', 'spy', 'america', 'time', 'die hard']


const AppProvider = ({children}) =>{
    
    const [randomNum , setRandomNum] = useState(Math.floor(Math.random() * randomMovie.length))
    const [searchedFor, setSearchedFor] = useState(randomMovie[randomNum])

    const{ loading, error, data: movies} = useFetch(`&s=${searchedFor}`)

    

    return(
        <AppContext.Provider value={{ movies,error, loading, setSearchedFor , searchedFor}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return( useContext(AppContext))
}

export {AppContext, AppProvider}