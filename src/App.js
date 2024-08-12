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

  return (<div>
  
<NavBar ></NavBar>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<MoviesList  ></MoviesList>}></Route>
 <Route path="/movie/:ids" element={<MovieDetails />} />

  </Routes>
</BrowserRouter>



  </div>)
    
}


export default App;
