
import { allMovies, hide } from "../types/movieTypes"

export const getAll=()=>{
    return {type:allMovies,data:[1,2,6]}
}
const hideall=()=>{
    return {type:hide,data:[3,20,664]}
}
export {hideall}