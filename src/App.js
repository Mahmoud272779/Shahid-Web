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
const [movies,setmovies]=useState([])
const [isSearch,setisSearch]=useState(false)
const [totalPages,setTotalPages]=useState(0)
const [word,setSearchWord]=useState('')
const mData=useSelector(s=>s.movies)
const disp=useDispatch();
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
  
  disp(hideall())
  


  console.log(movies)
  
},[])
console.log(mData)
  return (<div>
<h2>{mData}</h2>
<button onClick={()=>disp(getAll())}>show </button>
<button onClick={()=>disp(hideall())}>hisw </button>

<h4>fddfg</h4>
<h5>jhj</h5>
<h6>jkh</h6>
  </div>)
    
}


export default App;
