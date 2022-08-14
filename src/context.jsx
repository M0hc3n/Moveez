import React,{useContext , useState, useEffect} from "react";
import useFetch from './useFetch'

const AppContext = React.createContext()


const randomChar = ()=>{
    const randomNum = Math.floor( Math.random * 26) + 97
    return String.fromCharCode(randomNum)
}

const AppProvider = ({children}) =>{
    
    const [searchedFor, setSearchedFor] = useState("batman")
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