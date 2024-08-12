
import axios from "axios"
import { allMovies, allMoviesAPIPath, hide } from "../types/movieTypes"
import { useSelector } from "react-redux"

export const getAll=(word)=>{
    
    return async (dispatch)=>{
        
        const res=await axios.get(allMoviesAPIPath)
        
        dispatch ({type:allMovies,data:res.data.results,pages:res.data.total_pages,SP:false,searchWord:word}) //SP -->search param
    }
    
}

export const getSearchedMovies=(word)=>{
    return async (dispatch)=>{
       
            const res=await axios.get(`https://api.themoviedb.org/3/search/movie?query=${word}&api_key=675e2d4e494c3d2d212e5237fe047d61`)
          
        dispatch ({type:allMovies,data:res.data.results,pages:res.data.total_pages,SP:true,searchWord:word})
    }
    
}

export const getPageCount=(page,word)=>{
    return async (dispatch)=>{
        var res;
       if(word==""){
            res=await axios.get(`https://api.themoviedb.org/3/movie/popular?language=ar&api_key=675e2d4e494c3d2d212e5237fe047d61&page=${page}`)
       }
       else
       res=await axios.get(`https://api.themoviedb.org/3/search/movie?query=${word}&api_key=675e2d4e494c3d2d212e5237fe047d61&page=${page}`)
        dispatch ({type:allMovies,data:res.data.results,pages:res.data.total_pages,searchWord:word,SP:word==""?false:true})
    }
    
}
