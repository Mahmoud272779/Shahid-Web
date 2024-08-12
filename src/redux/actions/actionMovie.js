
import axios from "axios"
import { allMovies, allMoviesAPIPath, hide } from "../types/movieTypes"

export const getAll=()=>{
    return async (dispatch)=>{
        const res=await axios.get(allMoviesAPIPath)
        dispatch ({type:allMovies,data:res.data.results,pages:res.data.total_pages,SP:false}) //SP -->search param
    }
    
}

export const getSearchedMovies=(word)=>{
    return async (dispatch)=>{
       
            const res=await axios.get(`https://api.themoviedb.org/3/search/movie?query=${word}&api_key=675e2d4e494c3d2d212e5237fe047d61`)
          
        dispatch ({type:allMovies,data:res.data.results,pages:res.data.total_pages,SP:true})
    }
    
}

