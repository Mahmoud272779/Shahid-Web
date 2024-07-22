import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import NavBar from './components/NavBar'
import MoviesList from './components/MoviesList';

function App() {
  const [movies,setmovies]=useState([])
  const getAllMovies=async ()=>{
 const res=await axios.get("https://api.themoviedb.org/3/person/popular?language=ar&page=1&api_key=675e2d4e494c3d2d212e5237fe047d61")
 setmovies(res.data.results)
 
}

const getSearchedMovies=async (word)=>{
  if(word=="")
    return getAllMovies()
  const res=await axios.get(`https://api.themoviedb.org/3/search/movie?query=`+word+"&api_key=675e2d4e494c3d2d212e5237fe047d61")
  setmovies(res.data.results)
  
 }
  
useEffect(()=>{
 
   getAllMovies();
  console.log(movies)
  
},[])
  return (<div>

<NavBar search={getSearchedMovies}></NavBar>
<MoviesList movies={movies}></MoviesList>
  </div>)
    
}


export default App;
