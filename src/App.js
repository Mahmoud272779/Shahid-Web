import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import NavBar from './components/NavBar'
import MoviesList from './components/MoviesList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';

function App() {
const [movies,setmovies]=useState([])
const [isSearch,setisSearch]=useState(false)
const [totalPages,setTotalPages]=useState(0)
const [word,setSearchWord]=useState('')
  const getAllMovies=async ()=>{
 const res=await axios.get("https://api.themoviedb.org/3/person/popular?language=ar&api_key=675e2d4e494c3d2d212e5237fe047d61")
 setmovies(res.data.results)
 setisSearch(false)
 setTotalPages(res.data.total_pages)
 
}

const getSearchedMovies=async (word)=>{
  if(word=="")
    return getAllMovies()
  const res=await axios.get(`https://api.themoviedb.org/3/search/movie?query=${word}&api_key=675e2d4e494c3d2d212e5237fe047d61`)
  setmovies(res.data.results)
  setisSearch(true)
  setTotalPages(res.data.total_pages)
 }
  
 const getPage=async (page,word)=>{
  var res=null;
  if(word==='')
  {
   res=await axios.get(`https://api.themoviedb.org/3/person/popular?language=ar&api_key=675e2d4e494c3d2d212e5237fe047d61&page=${page}`)
  }
  else
  res=await axios.get(`https://api.themoviedb.org/3/person/popular?language=ar&api_key=675e2d4e494c3d2d212e5237fe047d61&page=${page}&query=${word}`)

  setmovies(res.data.results)
  setisSearch(false)
  setTotalPages(res.data.total_pages)

 }
useEffect(()=>{
 
   getAllMovies();
  console.log(movies)
  
},[])
  return (<div>

<NavBar search={getSearchedMovies }  passWordToApp={setSearchWord}></NavBar>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<MoviesList movies={movies} isSearchParam={isSearch} pageCount={totalPages}
getPage={getPage} word={word}></MoviesList>}></Route>
 <Route path="/movie/:ids" element={<MovieDetails />} />

  </Routes>
</BrowserRouter>

  </div>)
    
}


export default App;
