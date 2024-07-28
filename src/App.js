import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import NavBar from './components/NavBar'
import MoviesList from './components/MoviesList';

function App() {
const [movies,setmovies]=useState([])
const [isSearch,setisSearch]=useState(false)
  const getAllMovies=async ()=>{
 const res=await axios.get("https://api.themoviedb.org/3/person/popular?language=ar&page=1&api_key=675e2d4e494c3d2d212e5237fe047d61")
 setmovies(res.data.results)
 setisSearch(false)
 
}

const getSearchedMovies=async (word)=>{
  if(word=="")
    return getAllMovies()
  const res=await axios.get(`https://api.themoviedb.org/3/search/movie?query=`+word+"&api_key=675e2d4e494c3d2d212e5237fe047d61")
  setmovies(res.data.results)
  setisSearch(true)
  
 }
  
useEffect(()=>{
 
   getAllMovies();
  console.log(movies)
  
},[])
  return (<div>

<NavBar search={getSearchedMovies } ></NavBar>
<MoviesList movies={movies} isSearchParam={isSearch}></MoviesList>
  </div>)
    
}


export default App;
