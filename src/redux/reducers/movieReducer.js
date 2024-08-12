import { allMovies, hide } from "../types/movieTypes"

const initState={movies:[],page:0}
export const movieReducer=(s=initState,a)=>{
    switch(a.type){
    case allMovies :return {movies:a.data,pages:a.pages,SP:a.SP,searchWord:a.searchWord}
 
    default :return s
    }
}