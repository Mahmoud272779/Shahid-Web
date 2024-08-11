import { allMovies, hide } from "../types/movieTypes"

const initState={movies:[],page:0}
export const movieReducer=(s=initState,a)=>{
    switch(a.type){
    case allMovies :return {movies:a.data,page:a.pages}
    case  hide :return {movies:a.data}
    default :return s
    }
}