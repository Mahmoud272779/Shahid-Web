import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import NavBar from './components/NavBar'
import MoviesList from './components/MoviesList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import { useDispatch, useSelector } from 'react-redux';
import { getAll, hideall } from './redux/actions/actionMovie';

function App() {

const [isSearch,setisSearch]=useState(false)
const [totalPages,setTotalPages]=useState(0)
const [word,setSearchWord]=useState('')




  const getAllMovies=async ()=>{
//const res=await axios.get("https://api.themoviedb.org/3/person/popular?language=ar&api_key=675e2d4e494c3d2d212e5237fe047d61")
//  setmovies(res.data.results)
//  setisSearch(false)
//  setTotalPages(res.data.total_pages)
 
 }


  
 const getPage=async (page,word)=>{
  var res=null;
  if(word==='')
  {
   res=await axios.get(`https://api.themoviedb.org/3/person/popular?language=ar&api_key=675e2d4e494c3d2d212e5237fe047d61&page=${page}`)
  }
  else
  res=await axios.get(`https://api.themoviedb.org/3/person/popular?language=ar&api_key=675e2d4e494c3d2d212e5237fe047d61&page=${page}&query=${word}`)

  setisSearch(false)
  setTotalPages(res.data.total_pages)

 }


  return (<div>
  
<NavBar ></NavBar>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<MoviesList  isSearchParam={isSearch} pageCount={totalPages}
getPage={getPage} word={word}></MoviesList>}></Route>
 <Route path="/movie/:ids" element={<MovieDetails />} />

  </Routes>
</BrowserRouter>



  </div>)
    
}


export default App;
