
import axios from "axios"
import { allMovies, allMoviesAPIPath, hide } from "../types/movieTypes"

export const getAll=()=>{
    return async (dispatch)=>{
        const res=await axios.get(allMoviesAPIPath)
        dispatch ({type:allMovies,data:res.data.results,pages:res.data.total_pages})
    }
    
}
const hideall=()=>{
    return {type:hide,data:[3,20,664]}
}
export {hideall}