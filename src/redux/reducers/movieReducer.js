import { allMovies, hide } from "../types/movieTypes"

const initState={movies:[],page:0}
export const movieReducer=(s=initState,a)=>{
    switch(a.type){
    case allMovies || hide :return {movies:a.data}
    case  hide :return {movies:a.data}
    default :return s
    }
}